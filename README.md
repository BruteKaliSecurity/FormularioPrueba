# Formulario de Contacto - Alcaldía de Medellín

Formulario de contacto para descuentos de multas de tránsito y transporte.

## 🚀 Cómo probar localmente

### Opción 1: Usando Python (Recomendado)

1. Abre una terminal en esta carpeta
2. Ejecuta:
```bash
python3 server.py
```

3. Abre tu navegador en: `http://localhost:8000`

### Opción 2: Usando Node.js

Si tienes Node.js instalado:
```bash
npx http-server -p 8000
```

Luego abre: `http://localhost:8000`

## 📧 Configuración del correo

El formulario está configurado para enviar correos a: **escritorioremotox2@gmail.com**

## 🌐 Desplegar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos (excepto `server.py` y `README.md` si prefieres)
3. Ve a Settings > Pages
4. Selecciona la rama `main` y la carpeta `/ (root)`
5. Guarda y espera unos minutos
6. Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repositorio`

## 📝 Notas importantes

- **FormSubmit requiere un servidor web**: No funciona abriendo el HTML directamente
- **Primera vez**: FormSubmit puede pedir verificación por correo
- **Límite gratuito**: 50 envíos por mes
- **Logo**: Asegúrate de tener el archivo `logo-alcaldia.png` en la carpeta

## 🛠️ Archivos necesarios

- `index.html` - Estructura del formulario
- `styles.css` - Estilos
- `script.js` - Validaciones y lógica
- `images/logo-alcaldia.png` - Logo (debe estar en la carpeta `images/`)

