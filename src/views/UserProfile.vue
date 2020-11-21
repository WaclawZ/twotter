<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{ state.followers }}
                </div>
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile__twoots-wrapper">
            <TwootItem
                    v-for="twoot in state.user.twoots"
                    :key="twoot.id"
                    :username="state.user.username"
                    :twoot="twoot"
            />
        </div>
    </div>
</template>

<script>
    import { reactive } from "vue";
    import TwootItem from "../components/TwootItem"
    import CreateTwootPanel from "../components/CreateTwootPanel";

    export default {
        name: "UserProfile",
        components: {CreateTwootPanel, TwootItem},
        setup() {
            const state = reactive({
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
            })

            const addTwoot = (twoot) => {
                state.user.twoots.unshift({id: state.user.twoots.length, content: twoot})
            }

            return {
                state,
                addTwoot
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 50px;
        padding: 50px 5%;

        .user-profile__user-panel {
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #DFE3E8;
            margin-bottom: auto;

            h1 {
                margin: 0;
            }

            .user-profile__admin-badge {
                background: firebrick;
                color: white;
                border-radius: 5px;
                margin-right: auto;
                padding: 0 10px;
                font-weight: bold;
            }
        }

        .user-profile__twoots-wrapper {
            display: grid;
            grid-gap: 10px;
            margin-bottom: auto;
        }
    }
</style>