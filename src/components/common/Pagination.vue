<template>
    <div class="row mt-3">
        <div class="col-sm-12 col-md-5 mt-2">
            <div class="dataTables_info font-poppins weight-400 size-15" id="row_callback_info" role="status" aria-live="polite">
                Mostra da {{ selected.start }} a {{ selected.end }} di {{ dataTable.length }} elementi
            </div>
        </div>
        <div id="TablePagination" class="col-sm-12 col-md-7">
            <div class="dataTables_paginate paging_simple_numbers" id="row_callback_paginate">
                <ul class="pagination float-right font-poppins weight-400 size-15">
                    <li class="paginate_button page-item previous" v-on:click="prevPage()" v-bind:class="selected.number==1?disabled='disabled':''" id="row_callback_previous">
                        <a href="#TablePagination" aria-controls="row_callback" data-dt-idx="0" tabindex="0" class="page-link">Precedente</a>
                    </li>
                    <li v-for="page in pages " :key="page" class="paginate_button page-item" v-bind:class="{active:page.active}" >
                        <a href="#TablePagination" aria-controls="row_callback"  v-bind:data-dt-idx="page.number" tabindex="0" class="page-link" v-on:click="filter(page)">{{ page.number }}</a>
                    </li>
                    <li class="paginate_button page-item next" v-on:click="nextPage()" v-bind:class="selected.number==pages.length?disabled='disabled':''"  id="row_callback_next">
                        <a href="#TablePagination" aria-controls="row_callback" data-dt-idx="7" tabindex="0" class="page-link">Prossimo</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {

    @Prop() public offset!: number;

    public pages:any;
    public selected : any;
    public dataTable: any;
    public dataInput : any;
    public dataOutput : any;


    data() {
        this.selected = {
            number:0,
            active:false,
            data:[],
            start:0,
            end:0
        }

        this.dataTable = [];
        let offset = this.offset || 5;
        this.pages = [];

        this.$root.$on('dataApi', (data:any) => {
            this.pages = [];
            this.dataInput = data;
            this.dataTable = data;

            if(this.dataTable.length){

                let pageNumber = Math.floor(this.dataTable.length / offset);

                if(this.dataTable.length%offset>0){
                    pageNumber++;
                }

                for(let page=1; page<=pageNumber; page++){

                    let start = Math.floor(page*offset - offset);
                    let end = Math.floor(start*1+offset*1);
                        end>this.dataTable.length?end=this.dataTable.length:null;
                    let splice = this.dataInput.slice(start,end);
                    let active = false;
                        page==1?active=true:active=false;
                    this.pages.push({
                        active:active,
                        number:page,
                        data:splice,
                        start:start+1,
                        end:end
                    })
                }

                this.selected = this.pages[0];
                this.dataOutput = this.selected.data;
                this.$root.$emit('dataOutput', this.dataOutput);
            }else{ 
                this.pages = [];
            }

        });

        return {
            pages:this.pages,
            selected:this.selected,
            filter:(selectedPage:any)=>{
                for(let page of this.pages){
                    page.active=false;
                    if(selectedPage.number==page.number){
                        page.active=true;
                        this.selected=page;
                    }
                }         
                this.dataOutput = this.selected.data;
                this.$root.$emit('dataOutput', this.dataOutput);
            },
            prevPage:()=>{
                if(this.selected.number>1){
                    let filter = this.pages.find((page:any)=>{return page.number==this.selected.number-1});
                    this.selected = filter;
                    for(let page of this.pages){
                        page.active=false;
                        if(this.selected.number==page.number){
                            page.active=true;
                        }
                    }
                    this.dataOutput = this.selected.data;
                    this.$root.$emit('dataOutput', this.dataOutput);
                }
            },
            nextPage:()=>{
                if(this.selected.number<this.pages.length){
                    let filter = this.pages.find((page:any)=>{return page.number==this.selected.number+1});
                    this.selected = filter;
                    this.dataOutput = this.selected.data;
                    for(let page of this.pages){
                        page.active=false;
                        if(this.selected.number==page.number){
                            page.active=true;
                        }
                    }
                    this.$root.$emit('dataOutput', this.dataOutput);
                }
            }


        }

        

        
    }






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
