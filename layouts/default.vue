<template>
    <div class="scroll-container">
        <CustomCursor />
        <div class="loader">
            <div class="loader-inner">
                <div class="loader-wrapper wrapper-name">
                    <div class="name">
                        <span data-splitting>Hugues Leger</span>
                    </div>
                </div>
                <div class="loader-wrapper wrapper-job">
                    <div class="content-inner">
                        <h1  data-splitting class="title">Créatif Développeur</h1>
                        <div class="subtitle">
                            <span data-splitting>Web design & Front-end</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<script>
import CustomCursor from '@/components/CustomCursor.vue';

export default {
    components: {
        CustomCursor
    }
}
</script>

<style>
</style>