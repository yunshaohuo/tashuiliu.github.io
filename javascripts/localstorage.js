export default {
    saveItem(Object){
        window.localStorage.setItem('item_key',JSON.stringify(Object))
    },
    getItemList(){
        return JSON.parse(windo w.localStorage.getItem('item_key')||'[]')
    }
}