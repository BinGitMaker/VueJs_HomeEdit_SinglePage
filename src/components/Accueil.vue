<template>
    
    <div class="message">
        <div v-if="show">
            <Home2 :text-vient-de-accueil="message" 
            :sous-titre-vient-de-accueil="sousMessage"/>
        </div>
        
    </div>

    <div id="edit">
        <button @click="show = !show">
            Edit
        </button>
    <div v-if="!show"><Edit2 :text-vient-de-accueil="message" v-on:editToAccueil="onModifClick"/></div>
  
    </div>

    <router-view></router-view>
</template> 

<script>

import Home2 from './Home2.vue'
import Edit2 from './Edit2.vue'

export default {
    name: 'Accueil',
    components: {
        Home2,
        Edit2
    },
    /* declaration des variabes */
    data() {
        return {
            message: 'Accueil',
            sousMessage: 'Blablabla',
            show: true,
        }
    },
    methods: {
        onModifClick(value){
            console.log('onModifClick',value),
            this.message = value,
            this.show = true
        }
    }
}
</script>