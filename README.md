# What McMaster-Carr Part Are You? (static version)

This is a pure HTML/CSS/JS version of the quiz -- no Python, no server,
nothing to install. It's built specifically so it can be hosted for free
on GitHub Pages at a URL like:

    https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

## Files

```
index.html    the whole app shell (all "screens" live in one page)
script.js     app logic: scoring, state, rendering (mirrors app.py exactly)
data.js       all quiz content -- auto-generated from the Flask version's
              quiz_data.py, so the two stay in sync
style.css     same look as the Flask version
images/       the 3 uploaded reaction images (dumpster fire, skeptical pug,
              can of worms)
```

## Deploy it to GitHub Pages

1. **Create a new repo on GitHub.**
   Go to github.com -> New repository. Name it whatever you want the URL
   to say, e.g. `mcmaster-quiz`. Keep it public. Don't initialize it with
   a README (you already have files to push).

2. **Push these files to it.** From this folder, in a terminal:
   ```bash
   git init
   git add .
   git commit -m "What McMaster-Carr part are you"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
   (VS Code's Source Control panel can do all of this too, if you'd
   rather click than type -- Initialize Repository, stage all, commit,
   then "Publish to GitHub".)

3. **Turn on Pages.** On GitHub, go to your repo -> **Settings** ->
   **Pages** (left sidebar). Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**
   - Click **Save**.

4. **Wait about a minute**, then refresh that Settings > Pages screen --
   GitHub will show you the live URL, something like:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```
   That's it. It's live and free, and stays up as long as the repo does.

## Making edits later

- **Content edits** (questions, personas, quotes): the source of truth is
  still `quiz_data.py` in the Flask version. After editing it, regenerate
  `data.js` with:
  ```bash
  cd mcmaster_quiz   # the Flask project folder
  python3 -c "
  import json
  from quiz_data import PARTS, QUESTIONS, INTRO, OUTRO, BONUS_QUESTION, GEAR_PART_LINKS
  data = {'PARTS': PARTS, 'QUESTIONS': QUESTIONS, 'INTRO': INTRO, 'OUTRO': OUTRO,
          'BONUS_QUESTION': BONUS_QUESTION, 'GEAR_PART_LINKS': GEAR_PART_LINKS}
  print('const QUIZ_DATA = ' + json.dumps(data, indent=2, ensure_ascii=False) + ';')
  " > ../mcmaster_quiz_static/data.js
  ```
  Then copy the new `data.js` into this folder, commit, and push -- GitHub
  Pages redeploys automatically within a minute or two of any push to main.

  If you'd rather not keep the Python version around at all, you can just
  hand-edit `data.js` directly going forward -- it's the same JSON shape,
  just no longer auto-generated.

- **Look/feel edits**: edit `style.css` directly, same CSS variables and
  class names as the Flask version.

## Local preview before pushing

Since it's just static files, any local server works, e.g. from this
folder:
```bash
python3 -m http.server 8000
```
then open http://localhost:8000. (Opening `index.html` directly by
double-clicking usually works too, but some browsers restrict local
script loading over `file://`, so a local server is the safer check.)
