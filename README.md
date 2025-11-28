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

### Paso 1: Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Nombre del repositorio: `landing-contact` (o el nombre que prefieras)
5. Descripción: "Formulario de contacto - Alcaldía de Medellín"
6. Selecciona **Public** (necesario para GitHub Pages gratuito)
7. **NO** marques "Initialize this repository with a README" (ya tenemos uno)
8. Haz clic en **"Create repository"**

### Paso 2: Conectar y subir el código

Ejecuta estos comandos en tu terminal (ya estás en la carpeta correcta):

```bash
# Conectar con el repositorio remoto (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/landing-contact.git

# Cambiar a la rama main (si no estás ya en ella)
git branch -M main

# Subir el código
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **Save**
6. Espera 1-2 minutos

### Paso 4: Acceder a tu sitio

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/landing-contact
```

(Reemplaza `TU-USUARIO` con tu usuario de GitHub y `landing-contact` con el nombre de tu repositorio)

### ✅ Verificación

- El formulario funcionará automáticamente
- Los correos llegarán a: **escritorioremotox2@gmail.com**
- No necesitas servidor, GitHub Pages lo maneja todo

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

