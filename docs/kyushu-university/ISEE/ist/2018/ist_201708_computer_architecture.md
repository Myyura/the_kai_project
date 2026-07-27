---
sidebar_label: "2017年8月実施 計算機アーキテクチャ"
tags:
  - Kyushu-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Computer-Science.Computer-Architecture.Pipelining
  - Computer-Science.Computer-Architecture.Data-Hazard
  - Computer-Science.Computer-Architecture.Data-Forwarding
  - Computer-Science.Computer-Architecture.Cache
  - Computer-Science.Computer-Architecture.Cache-Address-Mapping
  - Computer-Science.Computer-Architecture.Cache-Miss-Types
---
# 九州大学 システム情報科学府 情報理工学専攻 2017年8月実施 計算機アーキテクチャ

## **Author**
Zero

## **Description**
### 【問 1】
以下の真理値表で与えられた論理関数 $F(a, b, c, d)$ を図で示されるように $3$ つの関数 $G1(b, d), G2(a, b)，G3(c, d)$ および AND ゲートと OR ゲートを使って実現することを考える．関数 $G1, G2$ および $G3$ の真理値表を示せ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_computer_architecture_p1.png" width="500" alt=""/>
</figure>

### 【問 2】
$5$ つのステージからなるパイプライン式データパスを有するマイクロプロセッサについて考える．実装されたパイプラインステージは，IF（命令取得），ID（命令デコード），EX（実行），MEM（メモリアクセス），ならびに，WB（ライトバック）である．加算命令，ロードワード命令，ストアワード命令の実行における各ステージの処理内容は以下の表に従う．ここで，パイプラインストールの発生を除き，各パイプラインステージの実行は常に $1$ クロックサイクルで完了できると仮定する．また，WB ステージでレジスタに書き込まれた値は，同一クロックサイクルにて，後続命令の ID ステージで読み出し可能である．以下の各問に答えよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_computer_architecture_p2.png" width="500" alt=""/>
</figure>

#### (1)
以下に示すプログラムについて考える．各行において ‘#’記号から右はコメントである．プログラム中に存在するフロー依存関係，逆依存関係，出力依存関係について，どの命令が，どの命令のどのレジスタに関して依存しているかをすべて列挙せよ．

```text
        lw $3,  10($2)   # <1>
        lw $4,  18($2)   # <2>
       add $10, $3, $4   # <3>
        sw $10, 40($2)   # <4>
       add $10, $3, $3   # <5>
       add $4,  $3, $10  # <6>
```

#### (2)
上記 (1) の依存関係のうち，命令パイプライン処理で実行した際にデータハザードを生じさせるものを示せ．

#### (3)
上記 (2) のデータハザードを以下それぞれの方式によって対処した場合の上記 (1) のプログラムの実行における CPI (Clock cycles Per Instruction) を求めよ．

- (A) パイプラインストールのみ

- (B) データフォワーディング＋パイプラインストール

#### (4)
逆依存関係や出力依存関係が生じる理由を説明せよ．

### 【問 3】
コンピュータのメモリシステムについて，以下の各問いに答えよ．

#### (1)
マイクロプロセッサに搭載されたダイレクトマップ・キャッシュについて考える．ワードサイズは $4$ バイト，キャッシュ・サイズは 16 バイト，ブロックサイズは $8$ バイト，アドレス長は $4$ ビットであり，キャッシュの初期状態は空とする．以下に示すワードアドレス ($2$ 進表現) に対してメモリアクセスが順次発生した場合のキャッシュ・ミス率を答えよ．

$$
1100 \Rightarrow 1010 \Rightarrow 1101 \Rightarrow 0101 \Rightarrow 1100 \Rightarrow 0101 \Rightarrow 1010 \Rightarrow 0101 \Rightarrow 0011 \Rightarrow 0101
$$

#### (2)
初期参照ミスとは何か答えよ．また，初期参照ミス回数を削減する方法を述べよ．

### 题目描述

【问题 1】逻辑函数 $F(a,b,c,d)$ 的真值表和组合逻辑结构见[原题图](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_computer_architecture_p1.png)。要求按图使用
$G1(b,d)$、$G2(a,b)$、$G3(c,d)$ 三个函数以及 AND、OR 门实现 $F$，写出 $G1$、$G2$、$G3$ 的真值表。

【问题 2】考虑具有 IF（取指）、ID（译码）、EX（执行）、MEM（访存）和 WB（写回）五级流水数据通路的微处理器。加法、装载字与存储字指令在各级中的具体操作见[原题阶段表](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_computer_architecture_p2.png)。除发生流水线停顿外，每一级均在 $1$ 个时钟周期内完成；WB 阶段写入寄存器的值可在同一周期被后续指令的 ID 阶段读取。对以下程序（`#` 右侧为注释）回答：

```text
        lw $3,  10($2)   # <1>
        lw $4,  18($2)   # <2>
       add $10, $3, $4   # <3>
        sw $10, 40($2)   # <4>
       add $10, $3, $3   # <5>
       add $4,  $3, $10  # <6>
```

1. 枚举程序中全部流依赖、反依赖和输出依赖，逐一指出哪条指令依赖哪条指令以及涉及哪个寄存器。
2. 指出这些依赖中哪些会在流水线执行时导致数据冒险。
3. 分别采用下列方式处理冒险时，求该程序的 CPI（每条指令平均时钟周期数）：
   - (A) 仅使用流水线停顿；
   - (B) 使用数据前递并配合流水线停顿。
4. 说明反依赖和输出依赖产生的原因。

【问题 3】回答以下存储系统问题：

1. 某直接映射缓存采用 $4$ 字节字长、$16$ 字节容量、$8$ 字节块和 $4$ 位地址，初始为空。依次访问下列二进制字地址时，求缓存缺失率：

   $$
   1100\Rightarrow1010\Rightarrow1101\Rightarrow0101\Rightarrow1100
   \Rightarrow0101\Rightarrow1010\Rightarrow0101\Rightarrow0011\Rightarrow0101.
   $$

2. 解释什么是首次访问缺失（强制缺失），并说明减少其次数的方法。

#### 考点

- **布尔函数分解**：依据目标函数真值表与与门、或门的连接结构确定多个输入子函数的真值表。
- **流水线数据相关与数据冒险**：识别写后读、读后写、写后写三类依赖，并结合五级流水时序判断实际会造成的冒险。
- **数据前递与流水线停顿**：为具体指令序列排定停顿，比较两种实现下每条指令的平均周期数。
- **直接映射缓存地址映射**：按块内偏移和索引追踪访问序列，计算命中与缺失。
- **缓存强制缺失**：说明首次装入块产生缺失的机制及通过增大块或预取利用空间局部性的方法。

## **Kai** 
### 【問 1】
|b|d|$G_1$|
|-|-|-|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|0|

|a|b|$G_2$|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|0|
|1|1|0|

|c|d|$G_3$|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

### 【問 2】
#### (1)
フロー依存は

レジスタ $3$ に関し　命令　$1$ と $3$ , $1$ と $5$ , $1$ と $6$

レジスタ $4$ に関し　命令　$2$ と $3$

レジスタ $10$ に関し　命令　$3$ と $4$ , $5$ と $6$ , $2$ と $6$

逆依存は

レジスタ $4$ に関し　命令　$3$ と $6$

出力依存は

レジスタ $10$ に関し　命令　$3$ と $4$ , $5$ と $6$ , $4$ と $5$

レジスタ $4$ に関し　命令　$2$ と $6$

#### (2)
それぞれ、データハザードを起こす

フロー依存は

レジスタ $3$ に関し　命令　$1$ と $3$ 

レジスタ $4$ に関し　命令　$2$ と $3$ 

レジスタ $10$ に関し　命令　$3$ と $4$

出力依存は

レジスタ $10$ に関し　命令　$3$ と $4$ 

#### (3)
##### (A)

|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|lw|IF|ID|EX|MEM|WB|0|0|0|0|0|0|0|0|0|0|0|
|lw|0|IF|ID|EX|MEM|WB|0|0|0|0|0|0|0|0|0|0|
|add|0|0|IF|IF|IF|ID|EX|-|WB|0|0|0|0|0|0|0|
|sw|0|0|0|0|0|IF|IF|IF|ID|EX|MEM|0|0|0|0|0|
|add|0|0|0|0|0|0|0|0|IF|ID|EX|-|WB|0|0|0|
|add|0|0|0|0|0|0|0|0|0|IF|IF|IF|ID|EX|-|WB|

上の表から、$16$ クロック

##### (B)
下の表より、$11$ クロック

|0|1|2|3|4|5|6|7|8|9|10|11|
|-|-|-|-|-|-|-|-|-|-|-|-|
|lw|IF|ID|EX|MEM|WB|0|0|0|0|0|0|
|lw|0|IF|ID|EX|MEM|WB|0|0|0|0|0|
|add|0|0|IF|IF|ID|EX|-|WB|0|0|0|
|sw|0|0|0|0|IF|ID|EX|MEM|0|0|0|
|add|0|0|0|0|0|IF|ID|EX|-|WB|0|
|add|0|0|0|0|0|0|IF|ID|EX|-|WB|

#### (4)
後ろの命令のレジスタ書き込みの前に前の命令のレジスタ読み出しを行う逆依存は命令を同時に並行処理した時に発生する。命令順を入れ替えた場合、出力依存によって最後の結果がわかってしまう。

### 【問 3】
