define(["bootstrap3"],function(t){return{build:function(t){var o=t.title?t.title:"提示",i="";"string"==typeof t.content?i=t.content:"function"==typeof t.content&&(i=t.content());var e="";"string"==typeof t.footer?e=t.footer:"function"==typeof t.footer&&(e=t.footer());var d=t.width?t.width:800,a=t.height?t.height:600,n=t.dialogClass?" "+t.dialogClass:"",s=$('<div class="modal fade">				<div class="modal-dialog'+n+'" role="document">					<div class="modal-content" style="width:'+d+"px;height:"+a+'px">						<div class="modal-header">							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>							<h4 class="modal-title J-title">'+o+'</h4>						</div>						<div class="modal-body J-content">'+i+'</div>						<div class="modal-footer J-footer">'+e+"</div>					</div>				</div>			</div>");return s.show=function(){this.modal("show")},s.on("hidden.bs.modal",function(){$(this).remove()}),s}}});