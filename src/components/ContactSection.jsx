import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Trophy,
  Code2,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_nvs8icu", //  SERVICE ID
        "template_hyv4kyr", //  TEMPLATE ID
        e.target,
        "CLpcAJCjq63Ra5tKG", //  PUBLIC KEY
      )
      .then(() => {
        toast({
          title: "Message sent",
          description: "Thanks for reaching out. I’ll reply soon.",
        });
        e.target.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Failed to send",
          description: "Please DM me on LinkedIn instead.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-3xl mx-auto">
          Open to software engineering roles, internships, research discussions,
          and competitive programming collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* LEFT — CONTACT + PROFILES */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:gourabmodak28092003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gourabmodak28092003@gmail.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Kolkata, India</p>
                </div>
              </div>

              {/* DM NOTE */}
              <div className="text-sm text-muted-foreground pl-14">
                Prefer DMs? You can message me directly on
                <span className="text-primary font-medium"> LinkedIn</span> or
                <span className="text-primary font-medium"> Instagram</span>.
              </div>
            </div>

            {/* CODING + SOCIAL PROFILES */}
            <div>
              <h4 className="font-medium mb-4">Profiles & Platforms</h4>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/spexcher"
                  target="_blank"
                  className="contact-pill"
                >
                  <Github size={16} /> GitHub
                </a>

                <a
                  href="https://linkedin.com/in/gourabmodak"
                  target="_blank"
                  className="contact-pill"
                >
                  <Linkedin size={16} /> LinkedIn (DM)
                </a>

                <a
                  href="https://instagram.com/spexcher"
                  target="_blank"
                  className="contact-pill"
                >
                  <Instagram size={16} /> Instagram (DM)
                </a>

                <a
                  href="https://www.codechef.com/users/spexcher"
                  target="_blank"
                  className="contact-pill"
                >
                  <Code2 size={16} /> CodeChef
                </a>

                <a
                  href="https://codeforces.com/profile/spexcher"
                  target="_blank"
                  className="contact-pill"
                >
                  <Trophy size={16} /> Codeforces
                </a>

                <a
                  href="https://leetcode.com/u/spexcher/"
                  target="_blank"
                  className="contact-pill"
                >
                  <Code2 size={16} /> LeetCode
                </a>

                <a
                  href="https://clist.by/coder/spexcher/"
                  target="_blank"
                  className="contact-pill"
                >
                  <Trophy size={16} /> CLIST
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            className="bg-card p-8 rounded-2xl border border-border"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="contact-input"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="contact-input"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Hi Gourab, I’d like to discuss..."
                className="contact-input resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
