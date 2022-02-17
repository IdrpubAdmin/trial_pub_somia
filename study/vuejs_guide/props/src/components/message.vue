<template>
    <div>
        {{ text }}
    </div>
</template>

<script>
export default {
    // props에서 타입설정
    props: {
        text: {
            type: String, 
            required: true, 
        }
    }
}
</script>

<style>
 button {
    background-color: blanchedalmond;
    font-size: 60px;
    border-radius: 10px;
    color: #000;
    border: none;
    width: 500px;
    height: 100px; 
 }
</style>