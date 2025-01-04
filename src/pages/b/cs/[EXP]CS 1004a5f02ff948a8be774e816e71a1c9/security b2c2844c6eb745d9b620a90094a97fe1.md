# security

セキュリティは、ネットワーク/プログラムの範囲と一緒に学ぶべき。

パソロジー

threatがvulnerabilityを狙って攻撃する

[Thread](security%20b2c2844c6eb745d9b620a90094a97fe1/Thread%2006bc3b34ba3442658758fa4709a89fb6.md)

- vulnerability: scope of IT
    - Risk management
        
        リスクとは組織がスレッドに晒されること/目的に対する不明確さ
        
        リスク対策をすること。
        
        リスク基準を定義し、リスクを特定/分析/評価/対応する。
        
        リスクアセスメント
        
        リスクコントロール
        
        リスクファイナンシング
        
        ![1000011697.png](security%20b2c2844c6eb745d9b620a90094a97fe1/1000011697.png)
        
    - Security policy
        
        基本方針
        
        対策基準
        
        実施手順
        
    - 情報セキュリティの7要素
        - 機密性
            
            許可された人だけが情報にアクセスできること
            
        - 完全性
            
            情報が正確で完全であること
            
        - 可用性
            
            利用者が必要な時にいつでも利用できること。
            
        
        ---
        
        - 真正性
            
            情報が
            
        - 信頼性
            
            何かしらの処理をしたら、意図したとおりに結果が返ってくること
            
        - 責任追跡性
            
            その情報に関して、誰が関与したのか確認できること
            
        - 否認防止性
            
            自分がやったんじゃない、と言われること（否認）を防止すること
            
    - 情報セキュリティマネジメント
        - JIS Q 27000シリーズ
            
            000 
            
        
        ↓
        
        - ISMS
            
            評価事項
            
            企業を評価する。
            
            ISMS認証
            
            適合評価制度
            
    - バッファオーバフロー
        
        プログラム実行中、バッファ（データを一時的に保持するためのメモリ領域）許容範囲を超えてデータを書き込むこと。バッファからはみ出たデータは隣接データを書き換えてしまうため、プログラムバグる原因。バッファに対して許容範囲を超えるデータを送りつける。
        
        - 対策
            
            許容範囲を超えるデータの書き込みを禁止する。
            
        - スタック破壊攻撃
            
            スタック領域に格納されているプログラムの戻り値番地を書き換え、送り込んだ不正コードに制御を移して実行させる。
            
            - 情報が盗まれる
            - DoS攻撃やDDoS攻撃の踏み台にされる
    - Classification of Malware
        
        コンピュータに悪影響を与えるソフトウエアの総称
        
        - コンピューターウィルス
            
            他のプログラムに寄生しながらコンピューターに悪影響を与えるウィルス
            
        - マクロウィルス
            
            ExcelやWordなどのマクロ機能を悪用して感染するウィルス
            自己増殖機能を持ち、自ら感染を広めていくウィルス
            
        - トロイの木馬
            
            有益なソフトウェアと見せかけてユーザーに実行を促し、その裏で不正操作をするウィルス
            
        - スパイウェア
            
            他ソフトに紛れてコンピューターにインストールされ、利用者の情報を抜き取るウィルス
            
        - ランサムウェア
            
            利用者PCのファイル勝手に暗号化し、暗号化の解除と引き換えに金銭を要求すること
            
        - キーロガー
            
            キーボード操作を不正に記録して利用者の個人情報を抜き取ること
            
        - ルートキット
            
            バックドア生成ツールやログ改ざんツールなど、コンピューターへの不正アクセスに有用な ツールがパッケージとしてまとめられたもの
            
        
        バックドアは攻撃者がこっそりと作るWebサイトへの侵入経路
        (バックドアからのアクセスは検知できない)
        
        - ボット
            
            ウィルス感染した情報機器を外部から不正に操作するプログラム
            
            ![1000008229.png](security%20b2c2844c6eb745d9b620a90094a97fe1/1000008229.png)
            
    
    Web applicationの脆弱性を狙った攻撃
    
    - DoS attack
        
        Denial of Services
        
        サーバやネットワークに意図的に過負荷をかけてサービスを妨害。
        
        - バッファオーバフローとの違い
            
            バッファオーバーフローとDoS（サービス拒否）攻撃は、それぞれ異なる攻撃手法ですが、いずれもシステムの動作に問題を引き起こす目的で使用されることがあります。
            1. バッファオーバーフロー： バッファオーバーフローは、メモリ管理の脆弱性を悪用する攻撃です。プログラムが特定のメモリ領域（バッファ）に対して予期しないサイズのデータを書き込むことで、隣接するメモリ領域を上書きし、プログラムの挙動を制御不能にすることが可能です。これにより、攻撃者は任意のコードを実行したり、システムをクラッシュさせたりすることができます。この攻撃は、特定のアプリケーションやプロセスに対して行われます。
            
            2. DoS攻撃（サービス拒否攻撃）： DoS攻撃は、サーバやネットワークリソースを過剰に消費させ、正規ユーザーがサービスを利用できなくすることを目的とした攻撃です。これは大量のリクエストを送りつけたり、ネットワークの帯域を占有することでサーバを過負荷状態にすることで達成されます。この攻撃はシステム全体やネットワーク全体をターゲットにすることが多く、バッファオーバーフローよりも広範囲に影響を及ぼすことがあります。
            
            まとめると、バッファオーバーフローは通常、特定のプログラムやプロセスをクラッシュさせたり、不正なコードを実行したりするためのもので、DoS攻撃はサーバやネットワーク全体を過負荷状態にしてサービスを停止させることを目的としています。両者は目的や手法が異なるものの、システムの安定性を損なう点では共通しています。
            
    
    DNSのサービス機能を利用した攻撃
    
    - Methods of Attack
        
        テストに出題される代表的なサーバー攻撃は下記の通り (特に赤文字のサイバー攻撃が重要)
        
        - パスワードクラック
            - Dictionary Attack
                
                辞書にのっている単語を使用する人が多いということを利用。
                
            - Bruce force attack
                
                IDを一つ定めて、片っ端からパスワードを試す
                
            - Reverse Bruce Force attack
                
                Password を一つ定めて、片っ端からIDを試す
                
            - Password List attack
                
                他のサイトからIDとPasswordを不正に入手
                
            - Rainbow attack
                
                HashからPasswordを予測する
                
        - 脆弱性を狙う攻撃
            - Cross-site scripting
                
                Website の脆弱性を見つけ、正規のサイトに偽サイトを貼る。
                
                問い合わせフォーム等の偽サイトを表示 して利用者に個人情報を入力させること で情報を抜き取る
                
            - SQL injection
                - 内容
                - 対策
                    - サニタイジング(無害化/無効化)
                        
                        入力された文字列をチェックし、
                        
                        予約記号（シングルクォート、セミコロン）を取り除く、他の文字に置き換える（エスケープ）。ディレクトリトラバーサルやクロスサイトスクリプティング対策にも効果的
                        
                    - 入力値チェック
                    - バインド機構
                        
                        入力値を変数（プレースホルダ）として扱うSQL文をデータベースに準備しておく。
                        
                        入力値（バインド値）をプレースホルダに埋め込んで（後からバインドして）実行する機能
                        
                        Difference Between Binding Parameters and Ordinary Variables:Ordinary Variables in SQL:When you use ordinary variables directly in an SQL query, you typically concatenate the variable values into the SQL string.This approach can lead to SQL injection vulnerabilities, where an attacker can insert malicious SQL code by manipulating the input.Binding Parameters (Bind Variables):Bind variables, also known as prepared statements, are placeholders in SQL queries (denoted by ?, :1, :2, etc.) where the actual data values are bound later.When using bind parameters, the query structure is first sent to the database, and then the values are separately bound to the placeholders. This means that the values are treated as data, not as part of the SQL command.This separation between the query and its data values helps prevent SQL injection attacks, as any injected malicious SQL code will not be executed as part of the query.
                        
                - 
                
                不正なSQLでデータ漏洩狙う
                
                SQLの中に不正な悪意のある命令を紛れ込ませ、 データベースを不当に操作する手法。
                
                命令文組み立ての時、入力値をチェックする。
                
                問い合わせや操作をする命令文を組み立ててしまう
                
                データの漏洩やデータベースの破壊等の 被害が想定される
                
                - Example
                    
                    ![image-1725839732430.jpg3535737269800481084.jpg](security%20b2c2844c6eb745d9b620a90094a97fe1/image-1725839732430.jpg3535737269800481084.jpg)
                    
                    ![image-1725839712698.jpg8681703419791359594.jpg](security%20b2c2844c6eb745d9b620a90094a97fe1/image-1725839712698.jpg8681703419791359594.jpg)
                    
            - OS-command injection
                
                ユーザーがWebサイトに入力したデータに OSへの命令文 (コマンド) を紛れ込ま せる手法
                OS操作コマンド (ファイルの削除や書き 換え等)を不正操作され、情報漏洩等 につながる
                
            - Directory-listing
                
                Webサイトを構成するディレクトリやファイ ルの一覧を全て表示させる攻撃(ユー ザーに公開していないファイルも表示され てしまう)
                
            - Directory-traversal
                
                相対パスを利用して、Webサイトの非公開ファイルに不正にアクセスして、ファイルの閲覧や削除などを実施する攻撃
                
                - 対策
                    
                    サニタイズ(`../`などディレクトリ操作のコマンドを含むファイル名を受け付けない、取り除く)
                    
        - なりすまし攻撃
            - DNSキャッシュポイズニング
                
                ドメインとIPアドレスを結びつけるDNS サーバーに偽サイトのドメインを紛れ込ま せ、利用者を偽サイトに誘導する手法
                
            - フィッシング
                
                - 金融機関などを装った電子メールを送信 して偽サイトに誘導し、利用者から個人 情報を抜き取る手法
                
            - セッションハイジャック
                
                - 利用者がWebサイトにログインした際に 発行されるセッションIDを剥奪し、そのID を用いて利用者になりすます手法
                
                - session
                    
                    セッションとはWebページにアクセスしたユーザーが行う一連の操作 (ログイン〜ログアウトまで等)。
                    
                    セッションIDでログインできる。
                    
            - SEOポイズニング
                
                SEO (Webサイトの掲載順位を決定す るアルゴリズム)を悪用し、悪意のある Webサイトが検索上位に表示されるよう にすること
                
            - IPスプーフィング
                
                攻撃者のIPアドレスを正規のアドレスに詐称してサイトに不正アクセスする手法
                
        - パソコンやサーバへの攻撃
            - バッファオーバーフロー
                
                サーバーの処理能力を超える大容量 データ等を送り付けて実行させ、サービスを停止させ る攻撃
                
            - ドライブバイダウンロー
                
                Webサイトを閲覧しただけでマルウェアを 閲覧者のPCのダウンロードさせる手法
                
            - DoS攻撃
                
                特定のWebサイトに対して大量のアクセ スを行い、サーバー機能を停止させること。 (攻撃者のPCが1台)
                
            - DDoS攻撃
                
                - 特定のWebサイトに対して大量のアクセ スを行い、サーバー機能を停止させること。 (攻撃者のPCが複数台)
                
    - ウイルス対策ソフト
        - 検知方法
            - behaviour-method
                
                仮想環境で検査対象のプログラムを実際に動かし、その挙動からマルウェアを検知する。 未知ウィルスの検知も可能
                
            - pattern-matching method
                
                既存ウィルスのパターン (シグネチャコード) と検査対象プログラムを比較してマルウェアを 検知する。未知ウィルスの検知は不可能
                
    
    ![image-1693908844981.jpg4359036857849322062.jpg](security%20b2c2844c6eb745d9b620a90094a97fe1/image-1693908844981.jpg4359036857849322062.jpg)
    

[](security%20b2c2844c6eb745d9b620a90094a97fe1/Untitled%20106496eb7c9080c8a6a9d2e3d6b7506c.md)

# Organisation

個人情報保護法

CRYPTREC

- JPCERT/CC
    
    Japan-Computer-Emergency-Response-Team/Coordination-Center
    

CSIRT

J-CRAT

NISC

J-CSIP

JVN

[Security in network](security%20b2c2844c6eb745d9b620a90094a97fe1/Security%20in%20network%20106496eb7c90808c8adbd066fb9eeb77.md)