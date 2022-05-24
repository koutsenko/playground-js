# Env
2021-01-31 21:33:36
            
---
Работа с разными версиями рантайма (node, python) и разными окружениями и библиотеками (node_modules, site-packages).
| Python | Javascript | Комментарий |
|--------|------------|-------------|
Интерпретатор сам по себе
<table><colgroup><col style="width: 58%" /><col style="width: 22%" /><col style="width: 19%" /></colgroup><thead><tr class="header"><th><p>$ python3 --version</p><p>Python 3.7.3</p></th><th><p>$ node --version</p><p>v14.4.0</p></th><th>Версия интерпретатора</th></tr></thead><tbody><tr class="odd"><td><p>$ python3</p><p>&gt;&gt;&gt; import sys</p><p>&gt;&gt;&gt; print(sys.path)</p><p>[</p><p>'',
</p><p>'/usr/lib/python37.zip',</p><p>'/usr/lib/python3.7', '/usr/lib/python3.7/lib-dynload', '/home/kds/.local/lib/python3.7/site-packages', '/usr/local/lib/python3.7/dist-packages', '/usr/lib/python3/dist-packages'</p><p>]</p></td><td><p>$ npm root -g</p><p>/usr/lib/node_modules</p></td><td>Пути к библиотекам, глобальные</td></tr></tbody></table>
Алиасы и старые версии
<table><colgroup><col style="width: 29%" /><col style="width: 27%" /><col style="width: 42%" /></colgroup><thead><tr class="header"><th><p>$ python --version</p><p>Python 3.7.3</p></th><th><p>$ nodejs --version</p><p>v14.4.0</p></th><th>Алиас к текущей версии</th></tr></thead><tbody><tr class="odd"><td><p>$ python2 --version</p><p>Python 2.7.16</p></td><td>-</td><td>Старая версия</td></tr></tbody></table>
Управление версиями интерпретатора
<table><colgroup><col style="width: 73%" /><col style="width: 26%" /></colgroup><thead><tr class="header"><th>Установка инструментов для смены интерпретатора</th><th>
</th></tr></thead><tbody><tr class="odd"><td><p><a href="https://github.com/pyenv/pyenv#basic-github-checkout">https://github.com/pyenv/pyenv#basic-github-checkout</a></p><p>Метод для Ubuntu, ибо в Debian тоже ~/.bashrc</p></td><td>
</td></tr><tr class="even"><td><p>
</p><p>Документация CLI</p></td><td>
</td></tr><tr class="odd"><td>$ pyenv</td><td>CLI-версия справки</td></tr><tr class="even"><td>Документация web</td><td>
</td></tr><tr class="odd"><td>См. <a href="https://github.com/pyenv/pyenv/blob/master/COMMANDS.md">github.com/pyenv/pyenv/blob/master/COMMANDS.md</a></td><td>веб-версия справки</td></tr><tr class="even"><td>Текущая версия</td><td>
</td></tr><tr class="odd"><td>$ pyenv version</td><td>
</td></tr><tr class="even"><td><p>
</p><p>Список версий доступных для установки</p></td><td>
</td></tr><tr class="odd"><td>$ pyenv install --list | grep 3.6</td><td>
</td></tr><tr class="even"><td><p>
</p><p>Установка выбранной версии</p></td><td>
</td></tr><tr class="odd"><td>$ pyenv install 3.6.10</td><td>
</td></tr><tr class="even"><td><p>
</p><p>Список установленных версий</p></td><td>
</td></tr><tr class="odd"><td>$ pyenv versions</td><td>
</td></tr><tr class="even"><td><p>
</p><p>Переключение на выбранную версию</p></td><td>
</td></tr><tr class="odd"><td>$ pyenv global 3.6.10</td><td>
</td></tr></tbody></table>




Работа в окружении
| $ python3 -m venv ./venv | Создать окружение        |
|---------------------------|--------------------------|
| $ . ./venv/bin/activate  | Активировать окружение   |
| $ deactivate             | Деактивировать окружение |
**Unsorted**




<table><colgroup><col style="width: 46%" /><col style="width: 31%" /><col style="width: 22%" /></colgroup><thead><tr class="header"><th>
</th><th><p>$ npm root</p><p>&lt;текущая директория&gt;/node_modules</p></th><th>Пути к библиотекам в окружении</th></tr></thead><tbody><tr class="odd"><td><p>
</p><p>
</p><p><strong>Задать версию интерпретатора в Docker - см. доку на Docker</strong></p></td><td>
</td><td>
</td></tr></tbody></table>


















Leonid Nasedkin, [18.06.20 11:32]
pyenv умеет управлять virtualenv
Leonid Nasedkin, [18.06.20 11:32]
pyenv virtualenv 3.6.10 fireoffer
Leonid Nasedkin, [18.06.20 11:32]
pyenv activate fireoffer
Leonid Nasedkin, [18.06.20 11:32]
Ну а дальше pip install -r requirements.txt




$ pyenv version
system (set by /home/kds/.pyenv/version)![pyenv shell $PYENV_VERSION pyenv local . python-version file pyenv global (---/ . pyenv/version) System Python ](Env-image1-00190663.png)){width="3.9375in" height="4.114583333333333in"}
$ pyenv versions
* system (set by /home/kds/.pyenv/version)


3.6.10
$ pyenv global 3.6.10
$ cat ~/.pyenv/version
3.6.10
$ python --version
Python 3.6.10
$ cd ../fire-offer
$ pip install -r requirements.txt





