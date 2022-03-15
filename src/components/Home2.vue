<template>
    <div class="message">
        <h1>{{ message }}</h1>
        <h2>{{ sousMessage }}</h2>
    </div>
    
</template> 

<script>

export default {
    name: 'Home2',
    data() {
        return {
            message: 'Home',
            sousMessage: 'Sous Titre',
        }
    },
    props: {
        textVientDeAccueil: {
            type: String,
            default: ''
        },
        sousTitreVientDeAccueil: {
            type: String,
            default: ''
        }
    },
    mounted(){
        if( this.textVientDeAccueil ){
        this.message = this.textVientDeAccueil
        }
        if( this.sousTitreVientDeAccueil ){
        this.sousMessage = this.sousTitreVientDeAccueil
        }
    }
}
</script>


