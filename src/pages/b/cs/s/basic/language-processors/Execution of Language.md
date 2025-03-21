# Execution of Language

[コンパイラ型、インタプリタ型、中間コード型の違い - やさしくて平和な技術ぶろぐ](https://tkjou.hateblo.jp/entry/2016/01/13/022641)

- Compiled? or Interpreted?
    
    この2つの分類は、プログラムの実行方式に関する基本的な違いを表しています。コンパイラ言語は事前にコードをコンパイルするため、実行速度が速い傾向がありますが、開発サイクルが長いことがあります。一方、インタプリタ言語は即座にコードを実行できるため、開発とテストが迅速に行えますが、一般的にはコンパイラ言語に比べて効率が低いことがあります。
    
    ただし、近年の技術の進歩により、コンパイラとインタプリタの境界は曖昧になってきており、多くのプログラミング言語が両方のアプローチを組み合わせて使用することがあります。_
    
    - **Compiled Language**
        
        コンパイラ言語は、プログラムをコンパイラと呼ばれるソフトウェアによって機械語や中間言語に変換してから実行されます。コンパイラはソースコード全体を解析し、目的の形式に変換して実行ファイルを生成します。実行時には、生成された実行ファイルが直接実行されます。代表的なコンパイラ言語にはC、C++、Rust、Goなどがあります。
        
        コンパイラ言語: 事前に一括でコンパイルする言語
        
        ### **コンパイラ言語の場合**
        
        AをコンパイルしたBというファイルを作成し、Bを実行することで処理を行います。
        
        例：Aプログラム > コンパイル > ファイルB > 実行
        
        2回目以降は、すでにコンパイル済みのファイルBができているため、コンパイルの工程は省いて、ファイルBを実行するだけで処理結果が得られる
        
        - **コンパイラ型**
            
            プログラム全体を一括して機械語に変換し、単独のソフトにする。
            
            - ○○(C言語など)**コンパイラ**
                
                ○○言語で書かれたプログラムを実行形式のプログラムに変換するソフトウェア
                
                プログラミング言語によって異なる（Cのコンパイラ、Javaのコンパイラ、Pythonのコンパイラ）
                
                最適化、解析、デバッグなどの機能が含まれる
                
            - **デバッガ**
                
                動作を時々止めながらバグを取り除く(デバッグ)必要がある
                
            
            コンパイル時に型チェックを行うため、実行時に型の不一致によるエラーを減らすことができます。
            
    - **Interpreted Language**
        
        インタプリタ言語は、プログラムのソースコードを実行時に直接解釈し、その都度命令を実行します。コードを実行するたびに解釈が行われるため、コンパイラ言語に比べて実行速度は遅いことが多いですが、開発とデバッグが容易であるという利点があります。代表的なインタプリタ言語にはPython、Ruby、JavaScriptなどがあります。
        
        インタプリタ言語: 実行のたびにコンパイルする
        
        ### **インタプリタ型言語の場合**
        
        Aを実行するタイミングで、1行ずつコンパイルを行いながら処理していきます。
        
        Aプログラム > 1行ずつ翻訳 > 1行ずつ実行
        
        2回目以降も、毎回Aを実行し、1行ずつ翻訳を行って処理結果を取得していく
        
        - **インタプリタ型**
            - **インタプリタ**というソフトウェア
            
            プログラムを読み込み一行ずつ直ちに機械語の命令にして実行してくれる。
            
            →プログラムの一部であっても実行することが出来る。
            
            ちなみにインタプリタ型のプログラミング言語は実行や記述を比較的簡単に行うことが出来るので**スクリプト**言語とも呼ばれることが多くある。但しスクリプト言語の定義はややこしいので深入りしない。
            
            インタプリタとは、プログラミング言語で書かれたソースコードを、一行ずつ解釈しながら実行するプログラムのことを指します。
            
            ソースコードをコンパイルする必要がなく、ソースコードをそのまま実行できるため、開発者が手軽にプログラムを実行することができます。
            
    - **中間コード型**
        
        インタプリタ型とコンパイラ型との中間。まずプログラムはコンパイルされます。しかしここで一挙に機械語に変換はせず、中間コードという非高級(unreadable for human)で非機械語(低級)コードに変換されファイルに保存される。このファイルを**仮想機械**(**バーチャルマシン**)というインタプリタがインタプリタ型のように実行してくれる。(中間コードと連呼したがJavaではこれをバイトコードと呼ぶ)
        

[LLVM](Execution%20of%20Language%203788f8179a7d40548ac3a47651aedcb4/LLVM%20a8b4a361a7b540f9a9fd87bf10dc8258.md)

- 機械語への変換
    
    最後に、コンパイラは中間コードを機械語に変換します。この機械語は、コンピュータが直接実行できる形式であり、プログラムが実行されるためのものです。
    
    これらのステップを経て、コンパイラは元のソースコードを機械語に変換し、プログラムが実行されることが可能になります。
    
    コンパイラは、プログラムのソースコードを機械語に変換するソフトウェアツールです。コンパイラは、プログラムを構成する命令や変数などの要素を解析し、中間コードを生成します。そして、中間コードを最適化し、機械語に変換して、実行可能なプログラムを生成します。
    

[Machine Language ](Execution%20of%20Language%203788f8179a7d40548ac3a47651aedcb4/Machine%20Language%206be9406b6a4b40429289a84f2989ee2b.md)

- 手続き型言語
    
    関数の適用と変数の変更を制限し、不変性を重視する
    
    関数は第一級の値として扱われ、高階関数やラムダ式（無名関数）を利用することが一般的です。代表的な関数型言語には、Haskell、Scala、Clojureなどがあります。
    
- OOP object-oriented programming
    - class
        
        javaだと、実行用のクラス(main methodがある)設計図クラス(attributeとproposalがある)
        
- Logic programming
    
    [Prolog](Execution%20of%20Language%203788f8179a7d40548ac3a47651aedcb4/Prolog%20494e986125794bf3a3bf91f3e563e40e.md)
    
- 宣言型
    
    [SQL](Execution%20of%20Language%203788f8179a7d40548ac3a47651aedcb4/SQL%20ef1b7b18a6f84f9493364a68c9d1297c.md)
    
- **JIT**

機械語に一対一に対応するように設計されており、直接コンピュータの命令を記述することができる。

機械語と低水準言語の違いは、主に人間が理解しやすさとプログラミングの容易さにあります。

機械語は、コンピュータが直接理解できるバイナリ形式の命令で書かれた言語です。機械語の命令は、通常、数値またはビットパターンで表されます。

機械語は、直接コンピュータによって実行されるため、非常に高速です。しかし、機械語でプログラミングを行うには、コンピュータのアーキテクチャや命令セットについて深い理解が必要であり、可読性や保守性に欠けるという欠点があります。

一方、低水準言語は、機械語よりも高水準で、人間が理解しやすく、プログラミングが容易な言語です。低水準言語は、ますが、命令が数値やビットパターンではなく、英単語で表現されるため、可読性が向上します。しかし、低水準言語でも、アーキテクチャや命令セットについての深い理解が必要であり、高水準言語に比べてプログラミングの手間がかかる場合があります。