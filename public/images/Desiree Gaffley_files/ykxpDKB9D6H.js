if (self.CavalryLogger) { CavalryLogger.start_js(["rQeHs"]); }

__d("XPagesAdminOptInController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/opt_in/",{ref:{type:"String",required:true}})}),null);
__d("XPagesAdminOptOutConfirmationDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/opt_out/dialog/",{page_id:{type:"FBID",required:true},ref:{type:"String",required:true},__asyncDialog:{type:"Int"}})}),null);
__d("PagesAdminOptOutHelper",["AsyncDialog","AsyncRequest","Event","QE2Logger","XPagesAdminOptInController","XPagesAdminOptOutConfirmationDialogController","tidyEvent"],(function a(b,c,d,e,f,g){"use strict";var h=null;function i(l){h=l}function j(){return h}var k={trackLink:function l(m){c("tidyEvent")(c("Event").listen(m,"click",function(event){c("QE2Logger").logExposureForUser("page_opt_out_button_on_hpp")}))},setPageID:function l(m){i(m)},sendOptOutRequest:function l(){var h=j();if(!h)return;var m=c("XPagesAdminOptOutConfirmationDialogController").getURIBuilder().setFBID("page_id",h).setString("ref","old_hpp").getURI();c("AsyncDialog").send(new(c("AsyncRequest"))(m))},sendOptInRequest:function l(){var h=j();if(!h)return;var m=c("XPagesAdminOptInController").getURIBuilder().setString("ref","old_hpp").getURI();new(c("AsyncRequest"))(m).send()},listenToMenuShow:function l(m){c("tidyEvent")(c("Event").listen(m,"click",function(event){c("QE2Logger").logExposureForUser("page_opt_out_button_on_hpp")}))}};f.exports=k}),null);