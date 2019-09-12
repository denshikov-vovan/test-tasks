<template>
    <app-container>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Test app</span>

            <span>Profile list</span>

            <div class="form-inline">
                <router-link to="/profiles/new" class="btn btn-outline-success btn-sm">New profile</router-link>
            </div>
        </nav>

        <div class="table-wrapper">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Profile ID</th>
                        <th scope="col">Anonymous</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(profile, index) in profiles" :key="profile.id">
                        <th>{{ index }}</th>
                        <td>{{ profile.type }}</td>
                        <td>{{ profile.id }}</td>
                        <td>{{ profile.anonymous }}</td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm" @click="deleteProfile(profile)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <app-preloader :visible="loading"></app-preloader>
            <app-error :message="error"></app-error>
        </div>
    </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer';
import AppPreloader from '@/components/AppPreloader';
import AppError     from '@/components/AppError';

import { getProfiles, deleteProfile } from '@/actions/profileActions';

export default {
    name: 'ProfilesView',
    data () {
        return {
            data   : [],
            loading: true,
            error  : ''
        }
    },
    mounted () {
        this.loadProfiles();
    },
    computed: {
        profiles () {
            return this.data.map(data => ({
                id       : data.profile.id,
                type     : data.profile.type,
                anonymous: data.profile.anonymous,
            }));
        }
    },
    methods: {
        async loadProfiles () {
            this.loading = true;
            this.error   = '';

            try {
                const data = await getProfiles();

                this.data = data;
            } catch (error) {
                this.data = [];
                this.error = error.message;
            }

            this.loading = false;
        },
        async deleteProfile (profile) {
            const { id, type } = profile;

            this.loading = true;

            try {
                await deleteProfile({ id, type });

                await this.loadProfiles();
            } catch (error) {
                this.loading = false;
                this.error = error.message;
            }

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
    .table-wrapper {
        max-height: 100%;
        overflow: auto;
        position: relative;
    }
</style>
