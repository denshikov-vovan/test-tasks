<template>
    <app-container>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Test app</span>

            <span>Create new profile</span>
        </nav>

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col col-lg-6">
                    <form @submit.prevent="createProfile">
                        <div class="form-group">
                            <label for="type">Profile type</label>
                            <input type="text" id="type"
                                class="form-control"
                                placeholder="Enter type"
                                v-model="type"
                                    >
                            <small id="emailHelp" class="form-text text-muted">Min length {{ minLen }} symbols</small>
                        </div>
                        <div class="form-group">
                            <label for="profileId">Profile ID</label>
                            <input type="text" id="profileId"
                                class="form-control"
                                placeholder="ID"
                                v-model="id"
                                    >
                            <small id="emailHelp" class="form-text text-muted">Min length {{ minLen }} symbols</small>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary" :disabled="isFormValid">Create</button>
                            <button class="btn btn-light" @click.prevent="goBack">Back</button>
                        </div>
                    </form>
                </div>
            </div>

            <app-preloader :visible="creating"></app-preloader>
            <app-error :message="error"></app-error>
        </div>
    </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer';
import AppPreloader from '@/components/AppPreloader';
import AppError     from '@/components/AppError';

import { createProfile } from '@/actions/profileActions';

const MIN_FIELD_LENGTH = 5;

export default {
    name: 'AppMedium',
    data () {
        return {
            id      : '',
            type    : '',
            creating: false,
            error   : '',
            minLen  : MIN_FIELD_LENGTH
        };
    },
    computed: {
        isFormValid () {
            return !(this.id.trim().length >= MIN_FIELD_LENGTH && this.type.trim().length >= MIN_FIELD_LENGTH);
        }
    },
    methods: {
        async createProfile () {
            const { id, type } = this;

            this.creating = true;
            try {
                await createProfile({ id, type });
                this.creating = false;
                this.goBack();
            } catch (error) {
                this.error = error.message;
                this.creating = false;
            }
        },
        goBack () {
            this.$router.go(-1);
        }
    },
    components: {
        AppContainer,
        AppPreloader,
        AppError
    }
};
</script>

<style lang="scss" scoped>
    .container {
        padding-top: 30px;
    }
</style>
