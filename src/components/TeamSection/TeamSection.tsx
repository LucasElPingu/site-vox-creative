import Image from 'next/image';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './TeamSection.module.css';

/**
 * Seção Quem Somos - Equipe VOX CREATIVE
 * Cards individuais para cada membro da equipe
 */
export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Larissa Soares',
      position: 'Head Comercial',
      image: '/images/larissa-soares.jpg',
      placeholderEmoji: '👩‍💼',
      specialties: ['Visão Global', 'Marketing Digital', 'Inglês & Espanhol', 'Web3 & IA'],
      bio: `Viajar o mundo foi uma decisão estratégica. Queria entender como o mercado lá fora se movimenta, aprender na prática e trazer esse conhecimento para a Vox. E é justamente aí que eu entro: meu diferencial é unir visão global com execução local.

Sou fluente em inglês e espanhol e atuo com marketing há mais de 6 anos. Já trabalhei com marcas como Vixteam, DBServices Portugal, OnlyPay e Expanzio, sempre focando em resultados reais: mais visibilidade, mais leads, mais vendas. Crescimento concreto!

Nos últimos 3 anos, mergulhei de cabeça no marketing digital global, explorando os mercados de Web3, IA e novas tecnologias. Hoje, lidero o comercial da VOX com esse olhar inovador e estratégico, conectando criatividade com performance.

Aqui na VOX não existe fórmula mágica. Existe estratégia com propósito.

Se sua empresa quer se destacar de verdade, crescer e estar à frente de todos no mercado, vamos juntos!`,
      linkedin: '#',
      whatsapp: '5511949548700'
    },
    {
      name: 'Laís Reis',
      position: 'Design Strategist',
      image: '/images/lais-reis.jpg',
      placeholderEmoji: '👩‍🎨',
      specialties: ['Design Estratégico', 'Identidade Visual', 'Branding', 'Comunicação'],
      bio: `Atuo na área visual com foco em transformar ideias em criações que comunicam com clareza e personalidade. Ao longo da minha trajetória, venho desenvolvendo um olhar cada vez mais estratégico, unindo sensibilidade estética, intenção e propósito em cada projeto.

Na VOX, sou responsável por dar forma visual à essência das marcas. Acredito que o design vai além da estética: é uma ferramenta poderosa de comunicação autêntica, capaz de gerar conexão real com o público.

Trabalho para aliar criatividade e estratégia, entendendo o que torna cada marca única e como isso pode ser representado de forma clara, coerente e relevante.

Se você busca mais do que um visual bonito e quer entregar valor com verdade, estou pronta para criar com você.`,
      linkedin: '#',
      whatsapp: '5511949548700'
    },
    {
      name: 'Thatiane',
      position: 'Especialista Digital',
      image: null, // Para adicionar foto: substitua por '/images/thatiane.jpg'
      placeholderEmoji: '👩‍💻',
      specialties: ['Marketing Digital', 'Estratégia', 'Social Media', 'Growth'],
      bio: `**[TEXTO TEMPORÁRIO - AGUARDANDO CONTEÚDO DA CLIENTE]**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

*Este texto será substituído pelo conteúdo real assim que for enviado pela cliente.*`,
      linkedin: '#',
      whatsapp: '5511949548700',
      isPlaceholder: true
    },
    {
      name: 'Eduarda',
      position: 'CEO & Founder',
      image: null, // Para adicionar foto: substitua por '/images/eduarda.jpg'
      placeholderEmoji: '👩‍💼',
      specialties: ['Liderança', 'Estratégia', 'Visão de Negócio', 'Inovação'],
      bio: `**[TEXTO TEMPORÁRIO - AGUARDANDO CONTEÚDO DA CLIENTE]**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

*Este texto será substituído pelo conteúdo real assim que for enviado pela cliente.*`,
      linkedin: '#',
      whatsapp: '5511949548700',
      isPlaceholder: true
    },
    {
      name: 'Lucas Silva',
      position: 'Parceiro (Desenvolvedor Web)',
      image: '/images/lucas.png',
      placeholderEmoji: '👨‍💻',
      specialties: ['Next.js', 'TypeScript', 'Spring Boot', 'SEO', 'Performance'],
      bio: `Desenvolvedor web especializado em criação de sites profissionais com foco em performance, design moderno e otimização para SEO. Trabalho com tecnologias como Next.js, TypeScript e Spring Boot, entregando soluções personalizadas para empreendedores e empresas que desejam fortalecer sua presença digital e conquistar mais clientes online.`,
      linkedin: '#',
      whatsapp: '5511949548700'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Header da seção */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            👥 Quem Somos
          </div>
          <h2 className={styles.title}>
            Conheça a equipe que faz a <span className={styles.highlight}>magia acontecer</span>
          </h2>
          <p className={styles.description}>
            Cada membro da nossa equipe traz uma expertise única, unindo visão global, 
            estratégia local e muita paixão pelo que fazemos. Juntos, criamos resultados 
            extraordinários para nossas marcas parceiras.
          </p>
        </div>

        {/* Grid da equipe */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <Card key={index} variant="elevated" className={`${styles.memberCard} ${member.isPlaceholder ? styles.placeholder : ''}`}>
              {member.isPlaceholder && (
                <div className={styles.placeholderLabel}>
                  📝 Aguardando conteúdo
                </div>
              )}
              
              <div className={styles.memberHeader}>
                <div className={styles.memberImage}>
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={`Foto de ${member.name}`}
                      width={80}
                      height={80}
                      className={styles.memberPhoto}
                    />
                  ) : (
                    <div className={styles.memberPlaceholder}>
                      <span className={styles.placeholderEmoji}>{member.placeholderEmoji}</span>
                      <span className={styles.placeholderText}>Foto em breve</span>
                    </div>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                </div>
              </div>

              <div className={styles.memberSpecialties}>
                {member.specialties.map((specialty, idx) => (
                  <span key={idx} className={styles.specialtyTag}>
                    {specialty}
                  </span>
                ))}
              </div>

              <div className={styles.memberBio}>
                {member.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className={styles.bioParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.memberActions}>
                <Button 
                  href={`https://wa.me/${member.whatsapp}`}
                  variant="whatsapp" 
                  size="small"
                  target="_blank"
                >
                  💬 WhatsApp
                </Button>
                <Button 
                  href={member.linkedin}
                  variant="secondary" 
                  size="small"
                  target="_blank"
                >
                  💼 LinkedIn
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className={styles.teamCta}>
          <h3 className={styles.ctaTitle}>Pronto para trabalhar conosco?</h3>
          <p className={styles.ctaDescription}>
            Nossa equipe está ansiosa para conhecer sua marca e criar algo incrível juntos.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contato" variant="primary" size="large">
              💬 Falar com a Equipe
            </Button>
            <Button href="/servicos" variant="secondary" size="large">
              🎯 Ver Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Nota sobre placeholders */}
        <div className={styles.placeholderNote}>
          <p>
            <strong>📝 Instruções para o cliente:</strong>
          </p>
          <ul>
            <li><strong>Fotos:</strong> Envie fotos em formato JPG/PNG, preferencialmente quadradas (500x500px), para substituir os placeholders</li>
            <li><strong>Textos:</strong> Os cards marcados como &ldquo;Aguardando conteúdo&rdquo; serão atualizados com os textos da Thatiane e Eduarda</li>
            <li><strong>Atualização:</strong> Basta substituir a propriedade <code>image: null</code> pela URL da foto no código</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
