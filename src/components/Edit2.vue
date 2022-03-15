<template>
    <div class="edit2">
        <div >
            <h1>{{ message }}</h1>
        </div>
<form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="message" style="margin: 1rem;">
        <button @click="update" class="button" >Modifier le titre</button>

</form>
    </div>
</template> 

<script>
import Home2 from './Home2.vue'
export default {
    name: 'Edit2',
    components: {
        Home2,
    },
    data() {
        return {
            message: 'test',
        }
    },
    props: {
        textVientDeAccueil: {
            type: String,
            default: ''
        }
    },
    methods: {
        update(){
            console.log('message'),
            this.$emit('editToAccueil', this.message)
        }
    }, 
    mounted(){
        this.message = this.textVientDeAccueil
        
    }
}
</script>


