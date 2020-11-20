<template>
    <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
        <div class="twoot">
            <div class="username">
                @{{username}}
            </div>
            <div class="content">
                {{twoot.content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TwootItem",
        props: {
            username: {
                type: String,
                required: true
            },
            twoot: {
                type: Object,
                required: true
            }
        },
        methods: {
            favouriteTwoot(id) {
                this.$emit('favourite', id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .twoot-item {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.25s ease;

        .username {
            font-weight: bold;
        }
    }

    .twoot-item:hover {
        transform: scale(1.1, 1.1);
    }
</style>