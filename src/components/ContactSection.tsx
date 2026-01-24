import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4">
            I'm open to discussing new opportunities, collaborations, or just having a friendly chat about technology!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <p className="text-foreground font-medium text-sm truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="card-elevated inline-block px-8 py-8 max-w-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you're looking for a dedicated developer who's eager to learn and contribute.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:devisrics13@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
