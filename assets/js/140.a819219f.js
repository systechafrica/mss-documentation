(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{932:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"install-postgress-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-postgress-database"}},[s._v("#")]),s._v(" Install Postgress Database")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Install Postgres  version >= 12.6")]),s._v("\n  psql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#confirm version installed")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Find newest guide on postgres official site")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" https://download.postgresql.org/pub/repos/yum/reporpms/F-37-x86_64/pgdg-fedora-repo-latest.noarch.rpm\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" postgresql15-server\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /usr/pgsql-15/bin/postgresql-15-setup initdb\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postgresql-15\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start postgresql-15\n")])])]),t("div",{staticClass:"language-blockquote extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n    Now cd /var/lib/pgsql/15/data/\n    edit pg_hba.conf\n    from  \n    local   all             all                                     peer\n    host    all             all             0.0.0.0/0                   scram-sha-256\n    To\n    local   all             all                                     trust\n    host    all             all             0.0.0.0/0                   trust\n\n\n    Edit postgresql.conf\n    Find and uncomment line #listen_addresses = 'localhost' and edit to\n       listen_addresses = '*'\n       Uncomment also:\n       #port = 5432\n       #password_encryption = scram-sha-256     # scram-sha-256 or md5\n\n    Exit from root and restart the service:\n    sudo systemctl restart postgresql-15.service\n   \n    Login to postgres\n    psql -U postgres\n    run command:\n    alter user postgres with password 'YOURPASSWORD';\n    Exit from postgres session.\n   \n\n    Now cd /var/lib/pgsql/15/data/\n    edit pg_hba.comf\n    from\n    local   all             all                                     trust\n    host    all             all             0.0.0.0/0                   trust\n    To\n    local   all             all                                     scram-sha-256\n    host    all             all             0.0.0.0/0                   scram-sha-256\n   \n    Exit from root and restart the service:\n    sudo systemctl restart postgresql-15.service\n   \n    login to postgres using 'YOURPASSWORD'\n")])])]),t("h3",{attrs:{id:"install-wildfly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-wildfly"}},[s._v("#")]),s._v(" Install Wildfly")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Install Wildfly  version >= 18.0 Final\n")])])]),t("h3",{attrs:{id:"configure-datasource-setup-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-datasource-setup-driver"}},[s._v("#")]),s._v(" Configure Datasource & Setup Driver")]),s._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("datasource")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jndi-name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("java:jboss/datasources/PostgresXe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("pool-name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("PostgresXe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("use-java-context")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("connection-url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jdbc:postgresql://localhost:5432/fm"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("connection-url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("postgresql"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("user-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("postgres"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("user-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("postgres"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("datasource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),t("h4",{attrs:{id:"nb-replace-above-with-your-database-name-and-connection-credentials-use-fm-as-database-name-for-smooth-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nb-replace-above-with-your-database-name-and-connection-credentials-use-fm-as-database-name-for-smooth-run"}},[s._v("#")]),s._v(" NB: Replace above with your database name and connection credentials. Use [fm] as database name for smooth run")]),s._v(" "),t("h3",{attrs:{id:"run-or-deploy-xe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-or-deploy-xe"}},[s._v("#")]),s._v(" Run or deploy Xe")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xe-postgres\nmvn clean compile wildfly:deploy\n")])])]),t("h3",{attrs:{id:"confirm-creation-of-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirm-creation-of-tables"}},[s._v("#")]),s._v(" Confirm Creation of Tables")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" psql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" your_postgres_user\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Enter Your password")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#show databases")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c your_db "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#switch to db")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("dt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#show tables")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("q "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Quit")]),s._v("\n")])])]),t("p",[t("strong",[s._v("Create this tables")])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" domain clob "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" USERS_SCHEMES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    USERS_ID          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" FKI664IMXO4SPEB8J43W9RUKF1S\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" USERS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ALLOWEDSCHEMES_ID "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" FKMQV6UDXD3PCOR5T8U6X8DBNX2\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" SCHEMES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" USERS_MEMBER_CLASSES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    USERS_ID\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v("\n            FK9TGKRTT6A6RH2FHRHBQU0EX0V\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v("\n                USERS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    MEMBERCLASSES_ID\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v("\n            FKM6XCAGUW6K14CQ9BHUG1DNOPV\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v("\n                MEMBER_CLASSES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" USERS_SPONSORS\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    USERS_ID\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v("\n            FKT3JSM9FJL7S6UWOMIO41YD0BV\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v("\n                USERS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ALLOWEDSPONSORS_ID\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v("\n            FKK7GMGB78K7MSQ912GKO8UIBVU\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v("\n                SPONSORS\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),t("h3",{attrs:{id:"import-functions-and-procedures-and-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-functions-and-procedures-and-views"}},[s._v("#")]),s._v(" Import functions and procedures and Views")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# locate routines_64.sql and views_349.sql in ../resources/pg_scripts/ in project folder")]),s._v("\n psql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-U")]),s._v(" your_postgres_user\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enter Your password")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show databases")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You may require to run this next two steps severally to ensure all views and routines are created")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c your_db "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch to db")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("i path_to_routines_64.sql "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# import routines, repeat until no errors")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("i path_to_views_349.sql "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# import views,  repeat till no errors")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("df "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#confirm routines")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("dv "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#confirm views")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("q "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Quit")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);