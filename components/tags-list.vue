<template>
    <aside class="list-container">
        <p class="close-list" @click="$emit('close-list', false)">cerrar</p>
        <h3>
            {{listTitle}}
            <span v-show="listCount > 0">({{listCount}}</span>
            <span>{{ listCount === 1 ? 'nota' : 'notas' }})</span>
        </h3>
        <p v-for="item in list" :key="item.slug">
            <nuxt-link :to="item.slug">
                {{
                    item.title.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) ? formatDate(item.title) : item.title
                }}
            </nuxt-link>
        </p>
    </aside>
</template>

<script>
import formatDate from '@/methods/formatDate.js';
export default {
    mixins:[formatDate],
    name: 'TagsList',
    props: {
        listTitle: {
            type: String
        },
        list: {
            type: Array,
            required: true
        },
        listCount: {
            type: Number
        }
    }
}
</script>

<style>
.list-container {
    max-width: 0;
    opacity: 0;
    max-height: 100vh;
    margin-top: 20vh;
    position: relative;
    overflow: hidden;
    transition: max-width .25s ease .2s, opacity .2s ease;
}
.open-results {
    max-width: 460px;
    min-width: 360;
    opacity: 1;
    overflow-y: auto;
    transition: max-width .25s ease, opacity .25s ease .2s;
}
.list-container > * {
    padding-left: 1rem;
}
.list-container > h3 {
    padding-top: 1rem;
    font-weight: 700;
}
.list-container > p {
    font-size: 1rem;
    line-height: 1.5;
}
.close-list {
    color: var(--color-secondary);
    margin-top: 3rem;
    cursor: pointer;
}
.close-list:hover {
    color:var(--color);
}

.list-container::-webkit-scrollbar { width: 0 !important }
.list-container{ 
    scrollbar-width: none; }
.list-container { -ms-overflow-style: none; }
/*
break point = 1148px
make it position: absolute; width: 100% after that   
*/
@media screen and (max-width: 1148px) {
    .list-container {
        max-width: 0;
        position: absolute;
        right:0;
        top: 0;
        z-index: 10;
        background-color: var(--bg);
        transition: max-width .25s ease .2s, opacity .2s ease;
    }
    .open-results {
        width: 100%;
        max-width: 100%;
        height:100vh;
        transition: width .25s ease, max-width .25s ease, opacity .25s ease .2s;
    }
    .main-container {
        margin-left: 1rem;
    }
    .fix-container {
        max-height: 80vh;
        overflow: hidden;
    }

}
 
</style>