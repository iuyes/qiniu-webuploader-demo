(function( $ ){

var uploader = WebUploader.create({

    // 选完文件后，是否自动上传。
    auto: true,

    // swf文件路径
    swf: '/js/Uploader.swf',

    // 文件接收服务端。
    //server: 'http://webuploader.duapp.com/server/fileupload.php',
    server: 'http://up.qiniu.com',

    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#filePicker',

    // 只允许选择图片文件。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    },
    // 用来扩展一个添加上qiniu的token，这个可以用后端语言来生成!!!!!
    formData: {
      'token':'MX-bE11GUuO8WUqfv1kt69hNiJ2BeI3xeKYnZqMl:nyM055VliIdALnCy9vHhHsxnbyk=:eyJzY29wZSI6InFpbml1LXBsdXBsb2FkLWV4YW1wbGUiLCJkZWFkbGluZSI6MzkwOTYyNTkzN30='
    }
});
uploader.on( 'uploadError', function( file ) {
console.log("error")
});
uploader.on( 'uploadSuccess', function( file ) {
console.log("uploadSuccess")
});
// uploadaccept 这个事件才可以拿到qiniu返回的数据 这时已经上传成功!!!!
uploader.on( 'uploadAccept', function( file, response ) {
console.log(response.hash)
});
})( jQuery );
