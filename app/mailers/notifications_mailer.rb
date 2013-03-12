class NotificationsMailer < ActionMailer::Base
  default :from => "noreply@ctpboston.com"
  default :to => "nvolungis@ctpboston.com"
  
  def new_message(message)
    @message = message
    
    mail(:subject => "[YourWebsite.tld] #{message.subject}")
  end
end
