import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Database, Globe, Target, Eye, Heart, CheckCircle, Star, Users, Search } from 'lucide-react'
import LOGOCompleto from '../public/logo_completo_auris.svg'
import LOGOSOLO from '../public/logo_solo_auris.svg'

export default function AurisLandingPage() {
    const [query, setQuery] = React.useState('')
    const [lightboxIndex, setLightboxIndex] = React.useState(-1)
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const recursos = [
        { id: 1, title: 'Cómo diseñamos un MVP', excerpt: 'Proceso de discovery, prototipado y desarrollo iterativo para validar ideas rápidamente.' },
        { id: 2, title: 'Buenas prácticas API', excerpt: 'Cómo diseñar APIs seguras, documentadas y fáciles de consumir.' },
        { id: 3, title: 'Escalabilidad en la nube', excerpt: 'Patrones para escalar aplicaciones y gestionar cargas variables.' },
        { id: 4, title: 'Optimización de rendimiento', excerpt: 'Técnicas para mejorar la performance en front y back.' },
    ]

    const images = [
        { src: '../public/galeria_animalis.webp', alt: 'Proyecto 1' },
        { src: '../public/asis_control_galeria.webp', alt: 'Proyecto 2' },
        { src: '../public/black_clasick_galeria.webp', alt: 'Proyecto 3' },
    ]

    const filtered = recursos.filter(r => (r.title + r.excerpt).toLowerCase().includes(query.toLowerCase()))

    React.useEffect(() => {
        if (lightboxIndex >= 0) {
            const onKey = (e) => {
                if (e.key === 'Escape') setLightboxIndex(-1)
                if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + images.length) % images.length)
                if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % images.length)
            }
            window.addEventListener('keydown', onKey)
            return () => window.removeEventListener('keydown', onKey)
        }
    }, [lightboxIndex])

    return (
        <div className="min-h-screen w-full bg-background text-foreground">
        <header className="border-b border-border w-full">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                    <img src={LOGOCompleto} alt="Auris Logo" className="h-8 w-auto" />
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
                    <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
                    <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Sobre Nosotros</a>
                    <a href="#equipo" className="text-foreground hover:text-primary transition-colors">Equipo</a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen((s) => !s)} className="p-2 rounded-md bg-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:block">
                    <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        as="a"
                        href="#contacto"
                    >
                        Contáctanos
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
            {mobileOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="px-4 py-3 space-y-2">
                        <a href="#inicio" onClick={() => setMobileOpen(false)} className="block">Inicio</a>
                        <a href="#servicios" onClick={() => setMobileOpen(false)} className="block">Servicios</a>
                        <a href="#nosotros" onClick={() => setMobileOpen(false)} className="block">Sobre Nosotros</a>
                        <a href="#equipo" onClick={() => setMobileOpen(false)} className="block">Equipo</a>
                        <a href="#contacto" onClick={() => setMobileOpen(false)} className="block font-medium">Contáctanos</a>
                    </div>
                </div>
            )}
        </header>

        <section id="inicio" className="py-20 lg:py-32 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                            Construimos <span className="text-primary">software y sitios web a medida</span> para empresas
                        </h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                            En Auris diseñamos y desarrollamos soluciones digitales personalizadas, escalables y seguras. Desde
                            plataformas de gestión hasta portales de reservas y aplicaciones empresariales, entregamos productos
                            que impulsan la eficiencia operativa, mejoran la experiencia de los usuarios y aceleran el crecimiento
                            de tu organización.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                            Conoce Nuestros Servicios
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-80 h-80 flex items-center justify-center">
                            <img src={LOGOSOLO} alt="Auris Logo" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Recursos / Buscador */}
        <section id="recursos" className="py-20 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">Recursos y <span className="text-primary">Artículos</span></h2>
                    <p className="text-muted-foreground">Busca guías, mejores prácticas y casos de estudio para tu proyecto.</p>
                </div>

                <div className="max-w-3xl mx-auto mb-8">
                    <div className="relative">
                        <Input
                            placeholder="Buscar recursos, guías o temas..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="pr-12"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="h-5 w-5" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 w-full">
                    {(filtered.length ? filtered : recursos).map(item => (
                        <Card key={item.id} className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto">
                                    Leer
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Galería / Catálogo de Imágenes */}
        <section id="galeria" className="py-20 bg-card/50 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">Catálogo de <span className="text-primary">Proyectos</span></h2>
                    <p className="text-muted-foreground">Mira ejemplos de diseños y productos entregados por Auris.</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full border-border hover:border-primary/50 transition-all duration-300">
                        {images.map((img, idx) => (
                            <button key={idx} onClick={() => setLightboxIndex(idx)} className="overflow-hidden rounded-md bg-muted">
                                <div className="w-full h-36 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        width="600"
                                        height="300"
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lightbox simple */}
                {lightboxIndex >= 0 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setLightboxIndex(-1)}>
                        <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                            <img src={images[lightboxIndex].src} alt={images[lightboxIndex].alt} className="mx-auto max-h-[80vh] w-auto max-w-full rounded" />
                            <div className="flex items-center justify-between mt-3">
                                <Button variant="outline" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }}>Atrás</Button>
                                <Button variant="outline" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }}>Siguiente</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
        <section id="servicios" className="py-20 bg-card/50 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Servicios a Medida <span className="text-primary">para tu empresa</span></h2>
                    <p className="text-muted-foreground text-lg">Diseñamos y construimos productos digitales hechos a la medida: plataformas web, sistemas de gestión, APIs y aplicaciones que escalan con tu negocio.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                    <Globe className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Desarrollo Web y Portales</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">Sitios corporativos, portales clientes y paneles administrativos con experiencia de usuario centrada y accesibilidad.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Interfaces centradas en el usuario</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Responsive y performance optimizado</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">SEO técnico y accesibilidad</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Integración con terceros</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                                Ver Ejemplos
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                    <Database className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Sistemas Empresariales Escalables</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">Plataformas backend, CRMs, ERPs y microservicios diseñados para alto rendimiento y fácil mantenimiento.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Arquitectura modular</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">APIs seguras y documentadas</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Escalabilidad horizontal</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                                    <span className="text-sm">Monitoreo y soporte 24/7</span>
                                </li>
                            </ul>
                                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto">
                                Solicitar Cotización
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* About Section: Auris como empresa de software */}
        <section id="nosotros" className="py-20 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Quiénes <span className="text-primary">Somos?</span></h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Auris es una empresa de ingeniería de software dedicada a crear soluciones digitales a medida: aplicaciones web y móviles, plataformas backend y APIs que resuelven problemas reales de negocio. Combinamos metodologías ágiles, diseño centrado en el usuario y buenas prácticas de ingeniería para entregar productos mantenibles y escalables.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full">
                    <Card className="bg-card border-border text-center p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Misión</h3>
                        <p className="text-muted-foreground">Ayudar a empresas a crecer mediante tecnología robusta y a la medida, reduciendo fricciones operativas y mejorando la experiencia de sus usuarios.</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Eye className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Visión</h3>
                        <p className="text-muted-foreground">Ser el socio tecnológico de referencia en la región para compañías que necesitan software estratégico, confiable y de alto impacto.</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Valores</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-center">
                                <Star className="h-4 w-4 text-primary mr-2" />
                                <span>Calidad: entregamos software confiable</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Star className="h-4 w-4 text-primary mr-2" />
                                <span>Colaboración: trabajamos como tu equipo</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Star className="h-4 w-4 text-primary mr-2" />
                                <span>Innovación: aplicamos nuevas tecnologías con criterio</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="equipo" className="py-20 bg-card/50 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nuestro <span className="text-primary">Equipo</span></h2>
                    <p className="text-muted-foreground text-lg">Un equipo multidisciplinario de ingenieros, diseñadores y product managers con experiencia en proyectos B2B y B2C, comprometidos con la entrega de valor medible.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <Card className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Francisco Giron</h3>
                        <p className="text-sm text-muted-foreground mb-2">Proyect Manager</p>
                        <p className="text-xs text-muted-foreground">Chiapas, México</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Pablo Martínez</h3>
                        <p className="text-sm text-muted-foreground mb-2">Frontend | UX Engineer</p>
                        <p className="text-xs text-muted-foreground">Chiapas, México</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Efraín Morales</h3>
                        <p className="text-sm text-muted-foreground mb-2">Arquitecto de Base de datos</p>
                        <p className="text-xs text-muted-foreground">Chiapas, México</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Yuritzi Medina</h3>
                        <p className="text-sm text-muted-foreground mb-2">RH</p>
                        <p className="text-xs text-muted-foreground">Chiapas, México</p>
                    </Card>

                    <Card className="bg-card border-border text-center p-6 hover:border-primary/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Jacqueline González</h3>
                        <p className="text-sm text-muted-foreground mb-2">RH</p>
                        <p className="text-xs text-muted-foreground">México</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 w-full" id='contacto'>
            <div className="container mx-auto px-4 w-full">
                <div className="grid lg:grid-cols-2 gap-12 w-full">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Quieres construir un producto digital? <span className="text-primary">Hablemos</span></h2>
                        <p className="text-muted-foreground mb-8">Contáctanos para evaluar tu proyecto. Ofrecemos discovery, arquitectura, desarrollo y soporte continuo. Te ayudamos a priorizar funcionalidades y a lanzar versiones que generen impacto desde el primer día.</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><strong>Servicios:</strong> Desarrollo a medida • Integraciones • APIs • Cloud • Consultoría</li>
                            <li><strong>Tiempo típico:</strong> MVP en 6-12 semanas según alcance</li>
                            <li><strong>Soporte:</strong> Contratos de mantenimiento y SLA disponibles</li>
                        </ul>
                    </div>

                    <Card className="bg-card border-border p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Envíanos un brief</h3>
                        <p className="text-muted-foreground text-center mb-6">Cuéntanos sobre tu reto y te enviaremos una propuesta inicial.</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                                    <Input placeholder="Tu nombre" className="bg-input border-border" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                                    <Input placeholder="Nombre de la empresa" className="bg-input border-border" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Correo</label>
                                <Input type="email" placeholder="tu@email.com" className="bg-input border-border" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Resumen del proyecto</label>
                                <Textarea placeholder="Describe el problema y lo que quieres lograr" className="bg-input border-border min-h-[120px]" />
                            </div>

                            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Brief<ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className=" border-t border-border py-12 w-full">
            <div className="container mx-auto px-4 w-full">
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">A</span>
                            </div>
                            <span className="text-xl font-bold">AURIS</span>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Carrera 45 #12-34</p>
                            <p>Chiapas, Mexico</p>
                            <p>contacto@auris.io</p>
                            <p>+52 9611207065</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Servicios</h4>
                        <div className="space-y-2 text-sm">
                            <a href="#servicios" className="block text-muted-foreground hover:text-primary transition-colors">Desarrollo Web</a>
                            <a href="#servicios" className="block text-muted-foreground hover:text-primary transition-colors">Sistemas Empresariales</a>
                            <a href="#servicios" className="block text-muted-foreground hover:text-primary transition-colors">Integraciones & APIs</a>
                            <a href="#servicios" className="block text-muted-foreground hover:text-primary transition-colors">Soporte y Mantenimiento</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary text-xs">f</span></div>
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary text-xs">t</span></div>
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary text-xs">in</span></div>
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span className="text-primary text-xs">ig</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
)
}
