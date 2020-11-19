<template>
    <div class="user-profile">
        <div class="user-panel">
            <h1 class="username">
                @{{ user.username }}
            </h1>
            <div class="admin-badge" v-if="user.isAdmin">Admin</div>
            <div class="follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        data() {
            return {
                inputText: "",
                followers: 0,
                user: {
                    id: 0,
                    username: "deSanta",
                    firstName: "Micheal",
                    lastName: "De Santa",
                    email: "michealdesanta@lossantos.com",
                    isAdmin: true
                }
            }
        },
        watch: {
            followers(newFollowerCount, oldFollowerCount) {
                if (oldFollowerCount < newFollowerCount) {
                    console.log(`${this.user.username} has gained a follower!`);
                }
            }
        },
        computed: {
            fullName() {
                return `${this.user.firstName} ${this.user.lastName}`;
            }
        },
        methods: {
            followUser() {
                this.followers++;
            }
        },
        mounted() {
            this.followUser();
        }
    }
</script>

<style>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 50px 5%;
    }

    .user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8
    }

    .admin-badge {
        background: firebrick;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 10px;
        font-weight: bold;
    }

    h1 {
        margin: 0;
    }
</style>