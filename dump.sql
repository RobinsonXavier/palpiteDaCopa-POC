PGDMP     	                
    z            palpitesDaCopaDb #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) &    @           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            A           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            B           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            C           1262    16384    palpitesDaCopaDb    DATABASE     g   CREATE DATABASE "palpitesDaCopaDb" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
 "   DROP DATABASE "palpitesDaCopaDb";
                postgres    false            ?            1259    16402    bets    TABLE     ?   CREATE TABLE public.bets (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "gameId" integer NOT NULL,
    bet character varying(5) NOT NULL
);
    DROP TABLE public.bets;
       public         heap    postgres    false            ?            1259    16401    bets_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.bets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.bets_id_seq;
       public          postgres    false    214            D           0    0    bets_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.bets_id_seq OWNED BY public.bets.id;
          public          postgres    false    213            ?            1259    16395    games    TABLE     ?   CREATE TABLE public.games (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    status character varying(6) NOT NULL,
    "scoreBoard" character varying(5) NOT NULL,
    "gameTime" character varying(8) NOT NULL
);
    DROP TABLE public.games;
       public         heap    postgres    false            ?            1259    16394    games_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.games_id_seq;
       public          postgres    false    212            E           0    0    games_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;
          public          postgres    false    211            ?            1259    16419    sessions    TABLE     ?   CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token character varying(255) NOT NULL,
    "lastStatus" bigint NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            ?            1259    16418    sessions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          postgres    false    216            F           0    0    sessions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
          public          postgres    false    215            ?            1259    16386    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    hits integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16385    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            G           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            ?           2604    16405    bets id    DEFAULT     b   ALTER TABLE ONLY public.bets ALTER COLUMN id SET DEFAULT nextval('public.bets_id_seq'::regclass);
 6   ALTER TABLE public.bets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            ?           2604    16398    games id    DEFAULT     d   ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);
 7   ALTER TABLE public.games ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            ?           2604    16422    sessions id    DEFAULT     j   ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 :   ALTER TABLE public.sessions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            ?           2604    16389    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ;          0    16402    bets 
   TABLE DATA           ;   COPY public.bets (id, "userId", "gameId", bet) FROM stdin;
    public          postgres    false    214   ?(       9          0    16395    games 
   TABLE DATA           K   COPY public.games (id, name, status, "scoreBoard", "gameTime") FROM stdin;
    public          postgres    false    212   )       =          0    16419    sessions 
   TABLE DATA           E   COPY public.sessions (id, "userId", token, "lastStatus") FROM stdin;
    public          postgres    false    216   ~*       7          0    16386    users 
   TABLE DATA           @   COPY public.users (id, name, password, email, hits) FROM stdin;
    public          postgres    false    210   ?*       H           0    0    bets_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.bets_id_seq', 4, true);
          public          postgres    false    213            I           0    0    games_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.games_id_seq', 16, true);
          public          postgres    false    211            J           0    0    sessions_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);
          public          postgres    false    215            K           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    209            ?           2606    16407    bets bets_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.bets DROP CONSTRAINT bets_pkey;
       public            postgres    false    214            ?           2606    16400    games games_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            postgres    false    212            ?           2606    16424    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    216            ?           2606    16428    sessions sessions_token_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);
 E   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_token_key;
       public            postgres    false    216            ?           2606    16426    sessions sessions_userId_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_key" UNIQUE ("userId");
 H   ALTER TABLE ONLY public.sessions DROP CONSTRAINT "sessions_userId_key";
       public            postgres    false    216            ?           2606    16393    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    210            ?           2606    16391    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?           2606    16413    bets bets_gameId_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.bets
    ADD CONSTRAINT "bets_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES public.games(id);
 A   ALTER TABLE ONLY public.bets DROP CONSTRAINT "bets_gameId_fkey";
       public          postgres    false    3231    212    214            ?           2606    16408    bets bets_userId_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.bets
    ADD CONSTRAINT "bets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 A   ALTER TABLE ONLY public.bets DROP CONSTRAINT "bets_userId_fkey";
       public          postgres    false    214    3229    210            ?           2606    16429    sessions sessions_userId_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 I   ALTER TABLE ONLY public.sessions DROP CONSTRAINT "sessions_userId_fkey";
       public          postgres    false    216    3229    210            ;   '   x?3?4?44?4?0?22M9??, ?(f????? j??      9   S  x?m??N?@???)xS?E]RzäM#5v???d:S??u?.L??̋9P+5eło????X ?kw??1Uj?$t?<?*ZL???????'ɫ?ڝ?`????K? %h?JKs?9^?[??C?e?R	?%??L???j:/??D??:?A?V?ܚ?jQ>?Ad??-D??ٵ?.??O]?j?ݶ?ׇ??Bg(?<d?`?0G"?ԑ???.??'B?,?mO&٩?L	?i+?0$?y?bs????W?I????x?x?=??7?P?빏v?3??~c?P?daW?lC~??ƨS^?????E?<??4??:1?S??Z??????L`????}??ƽ?8??Qi??      =   =   x????0?w؅*@?a?~??????k??????^????L?C,*:*???>"??^G      7   ?   x?=?M?B@ ?????s????\?(o??6??1????w?[w????o|?5%5`?);???????q?D?ך?B??w?????[???5??yc??j?aK?ڷ?|D??+???_?΢/ȗo????[?y?7X=C#n%?M??RY?&?G!?@9?_?2¢#??.ǽkz?Pqt=?f?㦽??QMx???@?dgsQiH?.;b??ʴ?3'?0???Y^     