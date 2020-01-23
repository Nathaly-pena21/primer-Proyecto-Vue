<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
        <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
    </div>
</template>
<script>
    import api from '@/api'
    import pxAssetsTable from '@/components/pxAssetsTable'

    export default {
        name: 'Home',

        components: {pxAssetsTable},

        data() {
            return {
                assets: [],
                isLoading: false
            }
        },

        created() {
            this.isLoading = true
            api.getAssets().then(assets => (this.assets = assets))
            .finally(() => this.isLoading = false)
        }
    }
</script>
