// ���������ʶ��
$(function () {
    var $highlight_lang = $('<div class="code_lang" title="��������"></div>');
  
    $('pre').before($highlight_lang);
    $('pre').each(function () {
      var code_language = $(this).attr('class');
  
      if (!code_language) {
        return true;
      };
      var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();
  
      // ����ĸ��д
      // lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
      
      $(this).siblings(".code_lang").text(lang_name);
    });
  });