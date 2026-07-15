---
title: "Horari"
image: "horari"
locale: "es"
color: "#A9A9A9"
tags:
  [
    "Electron",
    "SQLite (better-sqlite3)",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Lucide React",
    "date-fns",
    "jspdf",
    "html2canvas",
    "Hello Pangea DnD",
    "Más...",
  ]
link: "https://github.com/Alabalala/horari"
blog: true
summary: |
  Horari es una aplicación simple para Windows en electron que te permite crear y gestionar turnos para diferentes empleados/departamentos.

  Para construir este proyecto, utilice un stack de desarrollo next-gen con TRAE (IDE nativo de IA) a la cabeza.

  ¿Mi objetivo? Demostrar como la IA moderna puede multiplicar la eficiencia para un desarrollador de software.
date: 2026-01-24
---

# **Horari**

**Horari** es una aplicación moderna, eficiente y local-first para la planificación semanal de turnos, diseñada para simplificar la gestión de empleados. Ofrece una interfaz limpia y visual para organizar horarios y generar exportaciones profesionales listas para imprimir.

> 🤖 **Creado con IA y Trae**
>
> Esta aplicación se diseñó y construyó usando **Trae**, un IDE adaptativo con IA. Desde el concepto inicial hasta la versión final, cada línea de código fue el resultado de la colaboración entre yo y el agente de IA de Trae.

## ✨ **Características**

- **Planificador visual**: interfaz intuitiva de arrastrar y soltar para gestionar turnos semanales.
- **Gestión de empleados**: base de datos de personal con codificación por colores.
- **Exportaciones profesionales**: genera horarios en PDF y PNG de alta calidad optimizados para impresión (incluye visualización de turnos con “Blue Line”).
- **Gestión inteligente de turnos**: soporte fluido para turnos que cruzan días (p. ej., turnos nocturnos) y validación de solapes.
- **Datos locales**: almacenamiento seguro y offline-first con SQLite.
- **Actualizaciones automáticas**: mecanismo de auto‑update integrado vía GitHub Releases.

## 🛠️ **Stack tecnológico**

Horari está construido con un stack moderno y robusto para asegurar rendimiento y mantenibilidad:

- **Core**: [Electron](https://www.electronjs.org/) (v39)
- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) + conceptos de [shadcn/ui](https://ui.shadcn.com/)
- **Base de datos**: [SQLite](https://www.sqlite.org/) (con `better-sqlite3`)
- **Motor de exportación**: `html2canvas` + `jspdf` para renderizado pixel‑perfect
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Build tool**: [Electron Vite](https://electron-vite.org/)

## 💡 **¿Por qué IA? — Esta parte es sin IA**

Hasta ahora, normalmente había usado la IA como una herramienta secundaria de investigación al programar. Había probado agentes/MCPs, pero nunca había usado un IDE con IA. La idea me fascinaba, pero también me daba algo de respeto.

Me descargué TRAE para probarlo justo cuando un cliente me contactó para ver si podía desarrollar una app pequeña para Windows. Vi la oportunidad perfecta para poner a prueba el potencial de TRAE. Además, quería experimentar con Electron, así que el momento era ideal.

Además, sé que las empresas buscan gente que sepa escribir código, pero también que sepa usar IA y aprovecharla para escribir mejor código en menos tiempo.

El cliente me compartió un Excel que estaban usando para los turnos, pero tenían que copiar/pegar constantemente, se rompían fórmulas, etc.

<img width="917" height="490" alt="image" src="https://github.com/user-attachments/assets/a642b370-c9d6-4cb2-88ef-d7e30a0ad5d0" />

Analicé el Excel y escribí una lista de funcionalidades base:

- Gestionar empleados
- Gestionar turnos
- Panel con resumen de todo
- Ajustes

<img width="2613" height="1518" alt="image" src="https://github.com/user-attachments/assets/09015f0f-af8d-419b-8574-5c2c811c2696" />

Así que empecé a escribir prompts y a programar la app. Me quedé alucinado con la velocidad a la que aquello se iba construyendo. Yo orquestaba y guiaba, pero la IA hacía la mayor parte del trabajo.

Da vértigo, sí. Pero también es increíble: estaba haciendo cosas que normalmente me llevarían horas en pocos segundos. Y sí, hubo momentos en los que la IA se quedó atascada o entró en bucles incapaz de resolver un problema, pero fueron casos puntuales y con mi ayuda salió rápido.

Hubo muchas veces en las que quería ser yo quien escribiera el código, en lugar de la IA. Al fin y al cabo, me hice programador porque me encanta. Pero creo que esa es la gracia: usar la IA para las tareas repetitivas, las que no nos gustan, las que hay que automatizar, etc. Y dedicar nuestro tiempo a las partes que más disfrutamos.

Tengo muchas ganas de ver qué más puedo programar.

# Resumen

<div class="flex flex-wrap gap-3">
  <div class="bg-on-tertiary text-tertiary px-4 py-3 shadow-(--box-shadow-tertiary) border-2 border-tertiary min-w-[160px]">
    <p class="text-xs uppercase tracking-[0.2em] text-secondary mb-1">Días para MVP</p>
    <p class="font-bebas text-3xl leading-none">3</p>
  </div>
  <div class="bg-on-tertiary text-tertiary px-4 py-3 shadow-(--box-shadow-tertiary) border-2 border-tertiary min-w-[160px]">
    <p class="text-xs uppercase tracking-[0.2em] text-secondary mb-1">Prompts totales</p>
    <p class="font-bebas text-3xl leading-none">90</p>
  </div>
  <div class="bg-on-tertiary text-tertiary px-4 py-3 shadow-(--box-shadow-tertiary) border-2 border-tertiary min-w-[160px]">
    <p class="text-xs uppercase tracking-[0.2em] text-secondary mb-1">Código manual</p>
    <p class="font-bebas text-3xl leading-none">&lt; 20 líneas</p>
  </div>
</div>
