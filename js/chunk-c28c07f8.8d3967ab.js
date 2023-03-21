(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c28c07f8"],{"0e49":function(t,e,a){"use strict";var o=a("7ebc"),i=a.n(o);i.a},"7ebc":function(t,e,a){},9520:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cases"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增案例")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),a("el-table-column",{attrs:{prop:"Title",label:"案例标题",width:"180"}}),a("el-table-column",{attrs:{prop:"Img",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"100%"},attrs:{src:t.imgserver+e.row.Img,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"Content",label:"案例内容"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),a("el-dialog",{attrs:{title:"案例编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.formData}},[a("el-form-item",{attrs:{label:"案例标题","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Title,callback:function(e){t.$set(t.formData,"Title",e)},expression:"formData.Title"}})],1),a("el-form-item",{attrs:{label:"案例图片","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://shkjgw.shkjem.com/api/UpLoad/UploadImage",headers:t.headers,"show-file-list":!1,"on-success":t.handleSuccess}},[t.formData.Img?a("img",{staticClass:"avatar",attrs:{src:t.imgserver+t.formData.Img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"案例内容","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Content,callback:function(e){t.$set(t.formData,"Content",e)},expression:"formData.Content"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},i=[],s={data:function(){return{loading:!0,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,Img:"",Title:"",Content:"",Del:"",CreateTime:new Date},options:{},headers:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.headers={Authorization:t},this.loadData()},methods:{handleSuccess:function(t,e,a){window.console.log(t,e,a),this.formData.Img=t},loadData:function(){var t=this;this.loading=!0,this.$http.get("Cases/GetCasesAll").then(function(e){window.console.log(e),t.tableData=e.data,t.loading=!1}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})},openDialog:function(){this.formData.Id=0,this.formData.Img="",this.formData.Title="",this.formData.Content="",this.formData.Del="",this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;window.console.log(this.formData),this.formData.Id?(this.loading=!0,this.$http.post("Cases/ModifiedCases",this.formData,this.options).then(function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})):(this.loading=!0,this.$http.post("Cases/CreateCases",this.formData,this.options).then(function(e){t.loading=!1,window.console.log(e),t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()}).catch(function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var a=this;window.console.log(t,e),this.$confirm("此操作将永久此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,a.$http.post("Cases/DeleteCases?id=".concat(e.Id),null,a.options).then(function(t){a.loading=!1,window.console.log(t),a.$message({message:"删除成功！",type:"success"}),a.loadData()}).catch(function(t){a.$message({message:"网络或程序异常！"+t,type:"error"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},n=s,l=(a("0e49"),a("2877")),r=Object(l["a"])(n,o,i,!1,null,"ec200acc",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-c28c07f8.8d3967ab.js.map