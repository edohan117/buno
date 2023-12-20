<template>
    <div class="home">
        <input v-model="state.bu_no" type="text" id="bu_no">
        <button class="btn btn-primary" @click="sub">확인</button>

        <div v-for="(item, index) in state.data" :key="index">
            <p>사업자 번호: {{ item.b_no }}</p>
            <p>사업자 상태: {{ item.b_stt }}</p>
            <p>과세 유형: {{ item.tax_type }}</p>
            <hr>
        </div>
    </div>
</template>
  
<script>
import $ from 'jquery';
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            bu_no: "",
            data: []
        });

        const sub = () => {
            const resultArray = state.bu_no.split(' ');
            console.log("click: ", resultArray);

            const data = { "b_no": resultArray };

            $.ajax({
                url: "https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=Q1KbjOdJIls6D/bYelCRchbXGPLDbMr3Y4WbbJVkKzM6FaFOgtGYiXyr/KuGHuPJacwBbQ3g7l8yg9OtwES6Ew==",
                type: "POST",
                data: JSON.stringify(data),
                dataType: "JSON",
                contentType: "application/json",
                accept: "application/json",
                success: function (result) {
                    console.log(result);

                    // 서버 응답 데이터를 상태에 저장
                    state.data = result.data;
                },
                error: function (result) {
                    console.log(result.responseText);
                }
            });
            console.log("Data to be sent:", data);
        };

        return { state, sub };
    }
}
</script>
  