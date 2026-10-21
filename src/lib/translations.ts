export type Locale = "es" | "en";

export type Translations = {
  header: {
    brand: string;
    nav: Array<{ label: string; path: string }>;
    lang: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    description: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{ step: string; icon: string; title: string; description: string }>;
  };
  technology: {
    title: string;
    description: string;
    options: Array<{ icon: string; title: string; description: string; privacy: string }>;
  };
  screenshots: {
    title: string;
    description: string;
    items: Array<{ src: string; alt: string; caption: string }>;
  };
  privacyIntro: {
    title: string;
    description: string;
    cta: string;
  };
  privacyPage: {
    title: string;
    intro: string;
    sections: Array<{ title: string; body: string }>;
  };
  termsPage: {
    title: string;
    intro: string;
    sections: Array<{ title: string; body: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  contactPage: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      server: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  ctaFinal: {
    title: string;
    description: string;
  };
};

const translations: Record<Locale, Translations> = {
  es: {
    header: {
      brand: "Airi",
      nav: [
        { label: "Inicio", path: "/" },
        { label: "Funcionalidades", path: "/features" },
        { label: "Cómo funciona", path: "/how-it-works" },
        { label: "Tecnología", path: "/technology" },
        { label: "Privacidad", path: "/privacy" },
        { label: "Contacto", path: "/contact" }
      ],
      lang: "Español"
    },
    hero: {
      title: "Airi: Tu personaje conversacional en Discord",
      subtitle: "Conversaciones naturales, memoria persistente y relaciones que evolucionan. Airi es un solo personaje con relaciones independientes en cada servidor, sobre un LLM local o cualquier API compatible con OpenAI.",
      ctaPrimary: "Empezar ahora",
      ctaSecondary: "Ver cómo funciona"
    },
    features: {
      title: "Funcionalidades",
      description: "Todo lo que Airi puede hacer en tu servidor de Discord",
      items: [
        { icon: "/airi-icons/chat.svg", title: "Conversaciones naturales", description: "Responde a cada mensaje con contexto, historial por canal y detección de ráfagas. El modelo devuelve JSON estricto y Airi filtra repeticiones." },
        { icon: "/airi-icons/heart.svg", title: "Afinidad y niveles", description: "10 niveles (Bloqueada a Novios). El modelo propone deltas de -5 a +5; Airi aplica decay de -1 por día y confiesa su amor al llegar a 100." },
        { icon: "/airi-icons/star.svg", title: "Monogamia por servidor", description: "Una sola pareja oficial por servidor (winner_id). Los demás llegan hasta Amiga/Interés con un tope de friendzone; no se corona automáticamente." },
        { icon: "/airi-icons/book.svg", title: "Memorias por usuario", description: "Hasta 15 memorias de 160 caracteres por persona, con alta y olvido (`!memorias`, `!olvidar`). Deduplicación por substring." },
        { icon: "/airi-icons/book.svg", title: "Diario de Airi", description: "Hasta 300 entradas globales. Se escribe en hitos (nuevo nivel, cita, regalo, descubrimiento) con reflexión periódica y cooldown." },
        { icon: "/airi-icons/game.svg", title: "Citas narrativas", description: "Máquina de estados: hasta 6 turnos o 5 minutos, crisis con última oportunidad, pregunta decisiva con botones y dado, cooldown de 6 h." },
        { icon: "/airi-icons/cup.svg", title: "Regalos", description: "Catálogo de 11 regalos (flores, chocolate, collar, libro...). Efecto según gustos de Airi; cooldown de 24 h y anti-repetición." },
        { icon: "/airi-icons/sparkles.svg", title: "Identidad evolutiva", description: "Airi se autodescubre (rasgos, valores, preferencias, rarezas) con rate-limits y cambios reversibles (`!identidad-airi`)." },
        { icon: "/airi-icons/fac.svg", title: "Búsqueda web y GIFs", description: "Brave Search opcional con grounding anti-alucinación; GIFs de NekosBest. Visión opcional para imágenes." },
        { icon: "/airi-icons/shield.svg", title: "Privacidad por construcción", description: "Minimización en el prompt y filtro de salida. El estado relacional se aísla por servidor y por usuario." }
      ]
    },
    howItWorks: {
      title: "¿Cómo funciona Airi?",
      description: "Del mensaje en Discord al turno completo del modelo",
      steps: [
        { step: "1", icon: "/airi-icons/chat.svg", title: "Mensaje y debounce", description: "Airi filtra bots, media y comandos; agrupa ráfagas del mismo autor en 2,5 s antes de procesar." },
        { step: "2", icon: "/airi-icons/cpu.svg", title: "Turno LLM", description: "Monta el prompt con afinidad, memorias, diario e identidad; llama al modelo con JSON estricto y reintenta si falla el parseo." },
        { step: "3", icon: "/airi-icons/heart.svg", title: "Afinidad y memoria", description: "Aplica el delta propuesto, guarda memorias, escribe en el diario en hitos y actualiza la identidad si toca." },
        { step: "4", icon: "/airi-icons/play.svg", title: "Respuesta", description: "Publica la respuesta en trozos de 2000 caracteres, añade GIF si procede y registra la traza del turno." },
        { step: "5", icon: "/airi-icons/game.svg", title: "Citas", description: "En una cita usa historial privado, fases (crisis, pregunta decisiva, cierre) y genera un resumen en el diario." }
      ]
    },
    technology: {
      title: "Nuestra tecnología",
      description: "LLM local o API compatible, con observabilidad completa",
      options: [
        { icon: "/airi-icons/cpu.svg", title: "Ejecución local", description: "llama.cpp en tu máquina (perfil `llama`), con health check por turno y sin clave API.", privacy: "Datos en tu dispositivo" },
        { icon: "/airi-icons/cloud.svg", title: "APIs remotas", description: "OpenAI u OpenAI-compatible (OpenRouter, Groq, vLLM, LM Studio) con perfil `openai`/`openai-compatible`.", privacy: "Según el proveedor" },
        { icon: "/airi-icons/fac.svg", title: "Búsqueda y media", description: "Brave Search opcional con grounding; NekosBest para GIFs; visión multimodal si el backend la soporta.", privacy: "Solo si se configura" },
        { icon: "/airi-icons/zap.svg", title: "Observabilidad", description: "TurnEvent por turno, ring en memoria, trazas en disco, replay sin Discord y comando `!debug`.", privacy: "Local al operador" }
      ]
    },
    screenshots: {
      title: "Airi en acción",
      description: "Capturas reales de interacciones con Airi en Discord",
      items: [
        { src: "/features/airi-cita.png", alt: "Cita con Airi en Discord", caption: "Cita narrativa con Airi" },
        { src: "/features/airi-enamorada-discord.png", alt: "Airi enamorada en Discord", caption: "Nivel Enamorada" },
        { src: "/features/airi-molesta-discord.png", alt: "Airi molesta en Discord", caption: "Nivel Molesta" }
      ]
    },
    privacyIntro: {
      title: "Política de privacidad",
      description: "Airi valora tu privacidad y te informa sobre cómo trata tus datos",
      cta: "Leer política de privacidad"
    },
    privacyPage: {
      title: "Política de privacidad",
      intro: "Airi es un bot de Discord que mantiene estado relacional, memorias y diario por usuario y por servidor. Esta página resume cómo se tratan esos datos.",
      sections: [
        { title: "Qué se guarda", body: "Afinidad, memorias (máx. 15 por usuario), diario global (máx. 300 entradas), citas, regalos recientes, identidad de Airi y usuarios del canal. Todo se persiste en JSON por servidor en `data/guilds/<guild_id>/`." },
        { title: "Aislamiento", body: "El estado relacional es por servidor: un usuario en dos servidores tiene dos relaciones independientes. La identidad de Airi es global y compartida." },
        { title: "Minimización", body: "Al prompt solo entra lo que el destinatario puede recuperar. Los datos sensibles de otros usuarios nunca llegan al modelo ni al canal equivocado." },
        { title: "Filtro de salida", body: "Antes de publicar, Airi comprueba literalidad, paráfrasis y alusiones (defensa adicional, no garantía absoluta)." },
        { title: "Comandos sensibles", body: "`!memorias` y `!diario` son efímeros y privados; en un canal compartido solo se envía un aviso genérico sin contenido." },
        { title: "Integraciones opcionales", body: "Brave Search y NekosBest solo se usan si se configuran con sus claves. Las trazas en disco son opcionales (TRACE_DIR)." },
        { title: "Retención y borrado", body: "Comandos como `!reset`, `!olvidar` y `!reiniciar-temporada` permiten borrar historial, memorias y temporada. No hay purga automática por inactividad." }
      ]
    },
    termsPage: {
      title: "Términos de servicio",
      intro: "Al usar Airi en tu servidor de Discord aceptas estos términos.",
      sections: [
        { title: "Uso", body: "Airi se ofrece como bot conversacional. El operador configura el LLM (local o remoto), los canales autorizados y los permisos de Discord." },
        { title: "Canales autorizados", body: "Solo los canales indicados en CHANNEL_IDS pueden interactuar con Airi. Los mensajes en otros canales se ignoran." },
        { title: "Disponibilidad", body: "El servicio depende del backend LLM y de Discord. No se garantiza disponibilidad continua ni tiempos de respuesta." },
        { title: "Contenido generado", body: "Las respuestas las genera un modelo de lenguaje. El operador es responsable de revisar el comportamiento y de los datos que se envían al proveedor LLM elegido." },
        { title: "Limitaciones", body: "Airi no ofrece rupturas, múltiples parejas oficiales ni citas simultáneas en esta versión. Las decisiones de producto pueden cambiar." },
        { title: "Datos", body: "Los datos se almacenan en el dispositivo del operador. El operador es responsable de backups y de cumplir la normativa aplicable." }
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { question: "¿Qué es Airi?", answer: "Un bot de Discord impulsado por un LLM (local o API compatible) que mantiene conversaciones, afinidad, memorias, diario e identidad propios." },
        { question: "¿Cómo subo de nivel de afinidad?", answer: "Hablando con ella: humor, interés sincero, coqueteo sutil, recordar sus gustos y apoyarla. El modelo decide deltas de -5 a +5; groserías o spam bajan la afinidad." },
        { question: "¿Qué son las citas?", answer: "Invitaciones con `!cita` (nivel Amiga, cooldown 6 h). Varios turnos, crisis, pregunta decisiva con botones y dado, cierre con resumen en el diario." },
        { question: "¿Cómo funcionan los regalos?", answer: "Con `!regalo <item>` (1/día, 11 opciones). El efecto depende de los gustos de Airi; repetir el mismo regalo no suma." },
        { question: "¿Airi recuerda mis conversaciones?", answer: "Guarda hasta 15 memorias por usuario y un diario global. Puedes verlas con `!memorias` y `!diario`, y borrarlas con `!olvidar`." },
        { question: "¿Funciona en varios servidores?", answer: "Sí: la identidad de Airi es global, pero la afinidad, la pareja y el estado relacional son independientes por servidor." },
        { question: "¿Necesito un LLM local?", answer: "No. Por defecto usa llama.cpp local, pero puedes configurar OpenAI u otra API compatible con Chat Completions." },
        { question: "¿Es seguro usar Airi?", answer: "Los datos se guardan en tu propio dispositivo y se aplica minimización en el prompt más un filtro de salida. Consulta la política de privacidad." }
      ]
    },
    contactPage: {
      title: "Contacto",
      description: "¿Quieres integrar Airi en tu servidor de Discord? Cuéntanos y te respondemos.",
      form: {
        name: "Nombre",
        email: "Email",
        server: "Servidor de Discord (opcional)",
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando...",
        success: "Mensaje enviado. Te responderemos pronto.",
        error: "No se pudo enviar. Inténtalo de nuevo."
      }
    },
    ctaFinal: {
      title: "¿Listo para probar Airi?",
      description: "Empieza a tener conversaciones inteligentes y relaciones que evolucionan hoy mismo"
    }
  },
  en: {
    header: {
      brand: "Airi",
      nav: [
        { label: "Home", path: "/" },
        { label: "Features", path: "/features" },
        { label: "How it works", path: "/how-it-works" },
        { label: "Technology", path: "/technology" },
        { label: "Privacy", path: "/privacy" },
        { label: "Contact", path: "/contact" }
      ],
      lang: "English"
    },
    hero: {
      title: "Airi: Your conversational character on Discord",
      subtitle: "Natural conversations, persistent memory and evolving relationships. One character with independent relationships per server, on a local LLM or any OpenAI-compatible API.",
      ctaPrimary: "Get started",
      ctaSecondary: "See how it works"
    },
    features: {
      title: "Features",
      description: "Everything Airi can do in your Discord server",
      items: [
        { icon: "/airi-icons/chat.svg", title: "Natural conversations", description: "Replies to every message with channel history and burst debouncing. The model returns strict JSON and Airi filters repetitions." },
        { icon: "/airi-icons/heart.svg", title: "Affinity and levels", description: "10 levels (Blocked to Partners). The model proposes deltas from -5 to +5; Airi applies -1/day decay and confesses love at 100." },
        { icon: "/airi-icons/star.svg", title: "Monogamy per server", description: "One official partner per server (winner_id). Others cap at Amiga/Interest with a friendzone cap; never auto-crowned." },
        { icon: "/airi-icons/book.svg", title: "Memories per user", description: "Up to 15 memories of 160 chars per person, with add and forget (`!memorias`, `!olvidar`). Substring dedup." },
        { icon: "/airi-icons/book.svg", title: "Airi's diary", description: "Up to 300 global entries. Written on milestones (level up, date, gift, discovery) with periodic reflection and cooldown." },
        { icon: "/airi-icons/game.svg", title: "Narrative dates", description: "State machine: up to 6 turns or 5 minutes, crisis with last chance, decisive question with buttons and dice, 6 h cooldown." },
        { icon: "/airi-icons/cup.svg", title: "Gifts", description: "11-gift catalog (flowers, chocolate, necklace, book...). Effect depends on Airi's tastes; 24 h cooldown and anti-repeat." },
        { icon: "/airi-icons/sparkles.svg", title: "Evolving identity", description: "Airi self-discovers (traits, values, preferences, quirks) with rate limits and reversible changes (`!identidad-airi`)." },
        { icon: "/airi-icons/fac.svg", title: "Web search and GIFs", description: "Optional Brave Search with grounding; NekosBest GIFs. Optional vision for images." },
        { icon: "/airi-icons/shield.svg", title: "Privacy by construction", description: "Prompt minimization plus output filter. Relational state is isolated per server and per user." }
      ]
    },
    howItWorks: {
      title: "How does Airi work?",
      description: "From a Discord message to a full model turn",
      steps: [
        { step: "1", icon: "/airi-icons/chat.svg", title: "Message and debounce", description: "Airi filters bots, media and commands; groups bursts from the same author within 2.5 s before processing." },
        { step: "2", icon: "/airi-icons/cpu.svg", title: "LLM turn", description: "Builds the prompt with affinity, memories, diary and identity; calls the model with strict JSON and retries on parse failure." },
        { step: "3", icon: "/airi-icons/heart.svg", title: "Affinity and memory", description: "Applies the proposed delta, stores memories, writes diary entries on milestones and updates identity when needed." },
        { step: "4", icon: "/airi-icons/play.svg", title: "Reply", description: "Publishes the reply in 2000-char chunks, adds a GIF when appropriate and records the turn trace." },
        { step: "5", icon: "/airi-icons/game.svg", title: "Dates", description: "During a date uses private history, phases (crisis, decisive question, ending) and generates a diary summary." }
      ]
    },
    technology: {
      title: "Our technology",
      description: "Local LLM or compatible API, with full observability",
      options: [
        { icon: "/airi-icons/cpu.svg", title: "Local execution", description: "llama.cpp on your machine (profile `llama`), with per-turn health check and no API key.", privacy: "Data on your device" },
        { icon: "/airi-icons/cloud.svg", title: "Remote APIs", description: "OpenAI or OpenAI-compatible (OpenRouter, Groq, vLLM, LM Studio) via `openai`/`openai-compatible` profiles.", privacy: "Per provider policy" },
        { icon: "/airi-icons/fac.svg", title: "Search and media", description: "Optional Brave Search with grounding; NekosBest GIFs; multimodal vision if the backend supports it.", privacy: "Only if configured" },
        { icon: "/airi-icons/zap.svg", title: "Observability", description: "TurnEvent per turn, in-memory ring, on-disk traces, replay without Discord and `!debug` command.", privacy: "Local to operator" }
      ]
    },
    screenshots: {
      title: "Airi in action",
      description: "Real captures of interactions with Airi on Discord",
      items: [
        { src: "/features/airi-cita.png", alt: "Date with Airi on Discord", caption: "Narrative date with Airi" },
        { src: "/features/airi-enamorada-discord.png", alt: "Airi in love on Discord", caption: "In love level" },
        { src: "/features/airi-molesta-discord.png", alt: "Airi annoyed on Discord", caption: "Annoyed level" }
      ]
    },
    privacyIntro: {
      title: "Privacy policy",
      description: "Airi values your privacy and informs you about how we treat your data",
      cta: "Read privacy policy"
    },
    privacyPage: {
      title: "Privacy policy",
      intro: "Airi is a Discord bot that keeps relational state, memories and a diary per user and per server. This page summarizes how that data is handled.",
      sections: [
        { title: "What is stored", body: "Affinity, memories (up to 15 per user), global diary (up to 300 entries), dates, recent gifts, Airi's identity and channel users. Everything is persisted as JSON per server under `data/guilds/<guild_id>/`." },
        { title: "Isolation", body: "Relational state is per server: a user in two servers has two independent relationships. Airi's identity is global and shared." },
        { title: "Minimization", body: "Only what the recipient can retrieve enters the prompt. Other users' sensitive data never reaches the model or the wrong channel." },
        { title: "Output filter", body: "Before publishing, Airi checks literal, paraphrase and allusion matches (additional defense, not an absolute guarantee)." },
        { title: "Sensitive commands", body: "`!memorias` and `!diario` are ephemeral and private; in a shared channel only a generic notice without content is sent." },
        { title: "Optional integrations", body: "Brave Search and NekosBest are used only if configured with their keys. On-disk traces are optional (TRACE_DIR)." },
        { title: "Retention and deletion", body: "Commands like `!reset`, `!olvidar` and `!reiniciar-temporada` delete history, memories and season. There is no automatic purge by inactivity." }
      ]
    },
    termsPage: {
      title: "Terms of service",
      intro: "By using Airi in your Discord server you accept these terms.",
      sections: [
        { title: "Usage", body: "Airi is offered as a conversational bot. The operator configures the LLM (local or remote), authorized channels and Discord permissions." },
        { title: "Authorized channels", body: "Only channels listed in CHANNEL_IDS can interact with Airi. Messages elsewhere are ignored." },
        { title: "Availability", body: "The service depends on the LLM backend and Discord. Continuous availability or response times are not guaranteed." },
        { title: "Generated content", body: "Replies are generated by a language model. The operator is responsible for reviewing behavior and for data sent to the chosen LLM provider." },
        { title: "Limitations", body: "This version does not offer breakups, multiple official partners or simultaneous dates. Product decisions may change." },
        { title: "Data", body: "Data is stored on the operator's device. The operator is responsible for backups and for complying with applicable regulations." }
      ]
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "What is Airi?", answer: "A Discord bot powered by an LLM (local or compatible API) that keeps conversations, affinity, memories, diary and identity." },
        { question: "How do I raise affinity?", answer: "By talking to her: humor, sincere interest, subtle flirting, remembering her tastes and supporting her. The model decides deltas from -5 to +5; rudeness or spam lowers affinity." },
        { question: "What are dates?", answer: "Invitations via `!cita` (Amiga level, 6 h cooldown). Several turns, crisis, decisive question with buttons and dice, ending with a diary summary." },
        { question: "How do gifts work?", answer: "Via `!regalo <item>` (1/day, 11 options). The effect depends on Airi's tastes; repeating the same gift adds nothing." },
        { question: "Does Airi remember my conversations?", answer: "It stores up to 15 memories per user and a global diary. View them with `!memorias` and `!diario`, and delete with `!olvidar`." },
        { question: "Does it work across servers?", answer: "Yes: Airi's identity is global, but affinity, partner and relational state are independent per server." },
        { question: "Do I need a local LLM?", answer: "No. By default it uses local llama.cpp, but you can configure OpenAI or any OpenAI-compatible Chat Completions API." },
        { question: "Is it safe to use Airi?", answer: "Data is stored on your own device and prompt minimization plus an output filter are applied. See the privacy policy." }
      ]
    },
    contactPage: {
      title: "Contact",
      description: "Want to integrate Airi into your Discord server? Tell us and we'll get back to you.",
      form: {
        name: "Name",
        email: "Email",
        server: "Discord server (optional)",
        message: "Message",
        submit: "Send",
        sending: "Sending...",
        success: "Message sent. We'll reply soon.",
        error: "Could not send. Please try again."
      }
    },
    ctaFinal: {
      title: "Ready to try Airi?",
      description: "Start having intelligent conversations and evolving relationships today"
    }
  }
};

export default translations;