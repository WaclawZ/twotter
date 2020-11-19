<template>
    <div class="user-profile">
        <div class="user-panel">
            <h1 class="username">@{{ user.username }}</h1>
            <div class="admin-badge" v-if="user.isAdmin">Admin</div>
            <div class="follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
        </div>
        <div class="twoots-wrapper">
            <TwootItem
                    v-for="twoot in user.twoots"
                    :key="twoot.id"
                    :username="user.username"
                    :twoot="twoot"
                    @favourite="toggleFavourite"/>
        </div>
    </div>
</template>

<script>
    import TwootItem from "./TwootItem"

    export default {
        name: "UserProfile",
        components: {TwootItem},
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
                    isAdmin: true,
                    twoots: [
                        {id: 0, content: "Twotter is amazing!"},
                        {id: 1, content: "Don't forget to subscribe to Twotter profile."}
                    ]
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
            },
            toggleFavourite(id) {
                console.log(`Twoot #${id}`)
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
        grid-gap: 50px;
        padding: 50px 5%;
    }

    .user-panel {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
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

    .twoots-wrapper {
        display: grid;
        grid-gap: 10px;
    }

</style>