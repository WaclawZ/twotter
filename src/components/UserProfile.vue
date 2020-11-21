<template>
    <div class="user-profile">
        <div class="user-panel">
            <h1 class="username">@{{ user.username }}</h1>
            <div class="admin-badge" v-if="user.isAdmin">Admin</div>
            <div class="follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>

            <form class="create-twoot"
                  :class="{'--exceeded': newTwootCharacterCount > 180}"
                  @submit.prevent="createNewTwoot"
            >
                <label for="newTwoot">
                    <strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)
                </label>
                <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>
                <div class="create-twoot-type">
                    <label for="newTwootType"><strong>Type: </strong></label>
                    <select id="newTwootType" v-model="selectedTwootType">
                        <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                            {{option.name}}
                        </option>
                    </select>
                </div>
                <button :disabled="newTwootCharacterCount > 180">
                    Twoot!
                </button>
            </form>

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
                newTwootContent: '',
                selectedTwootType: "instant",
                twootTypes: [
                    {value: "draft", name: "Draft"},
                    {value: "instant", name: "Instant Twoot"},
                ],
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
            newTwootCharacterCount() {
                return this.newTwootContent.length;
            }
        },
        methods: {
            followUser() {
                this.followers++;
            },
            toggleFavourite(id) {
                console.log(`Twoot #${id}`)
            },
            createNewTwoot() {
                if (this.newTwootContent && this.selectedTwootType !== "draft") {
                    this.user.twoots.unshift({
                        id: this.user.twoots.length,
                        content: this.newTwootContent
                    })
                    this.newTwootContent = "";
                }
            }
        },
        mounted() {
            this.followUser();
        }
    }
</script>

<style lang="scss" scoped>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 50px;
        padding: 50px 5%;

        .user-panel {
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #DFE3E8;

            h1 {
                margin: 0;
            }

            .admin-badge {
                background: firebrick;
                color: white;
                border-radius: 5px;
                margin-right: auto;
                padding: 0 10px;
                font-weight: bold;
            }

            .create-twoot {
                padding-top: 10px;
                display: flex;
                flex-direction: column;

                &.--exceeded {
                    color: red;

                    button {
                        background-color: red;
                        color: white;
                    }
                }
            }
        }

        .twoots-wrapper {
            display: grid;
            grid-gap: 10px;
        }
    }
</style>