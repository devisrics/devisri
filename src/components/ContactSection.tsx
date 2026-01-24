import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const EMAILJS_SERVICE_ID = 'service_7c60r2a';
const EMAILJS_TEMPLATE_ID = 'template_prhg4j7';
const EMAILJS_PUBLIC_KEY = 'plT2AW5ReF2HqZyZL';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '6374967554',
    href: 'tel:+916374967554',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'devisrics13@gmail.com',
    href: 'mailto:devisrics13@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/devisri-v-e-a046372bb',
    href: 'https://linkedin.com/in/devisri-v-e-a046372bb',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/devisrics',
    href: 'https://github.com/devisrics',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cuddalore, Tamil Nadu',
    href: null,
  },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Failed to send message',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4">
            I'm open to discussing new opportunities, collaborations, or just
            having a friendly chat about technology!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT SIDE – CONTACT DETAILS */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="card-elevated p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium text-sm hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE – CONTACT FORM */}
            <div className="card-elevated p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="bg-background"
                />
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="bg-background"
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-background"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
