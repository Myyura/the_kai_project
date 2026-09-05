---
sidebar_label: 2008年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Artificial-Intelligence.Semantic-Network
  - Data-Science-Artificial-Intelligence.Artificial-Intelligence.Knowledge-Representation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
There are several methods for knowledge representation. In contrast to a system of production rules and logical formulae which are modular representations, the semantic network (where a node represents a concept or an entity and a named link represents a relation between the nodes) has the characteristics of representing the pieces of knowledge mutually interrelated. For example, the following knowledge can be represented in a semantic network shown on the right.

*   A pigeon is a bird.
*   A bird has wings.
*   A pigeon eats soybeans.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200808_3_p1.png" width="350" alt=""/>
</figure>

Q1. Represent the following pieces of knowledge $1)\sim8)$ as a semantic network. (Here, you can create necessary link names. In this case, use a meaningful name for a link, or append an explanatory comment so that the meaning of the link name can be understood.)

1) Taro is a human, and works in the Ueno Zoo.
2) Taro takes care of Ueno Zoo's penguins.
3) Yuki is one of Ueno Zoo's penguins, and lives in the Ueno Zoo.
4) A penguin is a bird.
5) A bird can fly.
6) Taro owns a Prius.
7) Kenta is a human, and owns another Prius.
8) Prius is a hybrid car.

Q2. (2-1) In the semantic network made in Q1, "Yuki can fly" can be derived. Explain the reason why this derivation occurs.
(2-2) Describe which widely used programming languages include functionality similar to what occurs in (2-1).
(2-3) Explain the merits of the functionality mentioned in (2-1) and (2-2) from the viewpoint of the description and management of knowledge or programs.

Q3. We want to efficiently infer an answer to the query “who is the human that takes care of Yuki and owns a hybrid car?” in the semantic network made in Q1. Explain what type of inference method can be employed, and find an answer for this query.

Q4. Assume that the following knowledge is added to the semantic network made in Q1.

9) A penguin cannot fly.

In this case, there are the following possibilities.

a) Both “Yuki can fly” and “Yuki cannot fly” can be derived.
b) Neither “Yuki can fly” nor “Yuki cannot fly” can be derived.
c) Only “Yuki cannot fly” can be derived.

Why do such possibilities arise? Explain what type of knowledge manipulation is required to yield the case c).

### 题目描述

知识表示有多种方法。产生式规则和逻辑公式通常以模块化方式表示知识；语义网络则以结点表示概念或实体、以带名称的边表示结点间关系，能够显式表现知识片段之间的联系。原文示例把“鸽子是鸟”“鸟有翅膀”“鸽子吃大豆”表示成语义网络。

1. 将以下 8 条知识表示成语义网络。可以自行创建关系边名称，但名称应语义明确；否则须附注说明其含义。
   1. 太郎是人，并在上野动物园工作。
   2. 太郎照料上野动物园的企鹅。
   3. Yuki 是上野动物园的一只企鹅，并住在上野动物园。
   4. 企鹅是鸟。
   5. 鸟会飞。
   6. 太郎拥有一辆 Prius。
   7. 健太是人，并拥有另一辆 Prius。
   8. Prius 是混合动力汽车。
2. 回答有关第 1 问语义网络的继承机制：
   1. 说明为什么能够推出“Yuki 会飞”。
   2. 指出哪些广泛使用的编程语言具有与上述现象相似的功能。
   3. 从知识或程序的描述与管理角度，说明这种功能的优点。
3. 要高效回答“谁是照料 Yuki 且拥有混合动力汽车的人？”这一查询，说明可采用何种推理方法，并给出查询答案。
4. 再加入知识“企鹅不会飞”。此时可能出现三种处理结果：a. 同时推出“Yuki 会飞”和“Yuki 不会飞”；b. 两者均不能推出；c. 只推出“Yuki 不会飞”。说明为何会有这些可能性，以及要得到结果 c 需要怎样的知识处理。


## **Kai**

### Q1

クラス間の `subclass` と個体からクラスへの `instance` を区別する。`UenoPenguin` は「上野動物園のペンギン」というクラスであり、`cares-for-all` はそのクラスに属する各個体を世話するという意味のリンクとする。太郎と健太の車は別個体 `carT`, `carK` として表し、`carT != carK` を明記する。

```mermaid
flowchart LR
    T[Taro] -->|instance| H[Human]
    T -->|works-at| U[Ueno Zoo]
    T -->|cares-for-all| UP[UenoPenguin]
    Y[Yuki] -->|instance| UP
    Y -->|lives-in| U
    UP -->|subclass| P[Penguin]
    P -->|subclass| B[Bird]
    B -->|can| F[Fly]
    T -->|owns| CT[carT]
    K[Kenta] -->|instance| H
    K -->|owns| CK[carK]
    CT -->|instance| PR[Prius]
    CK -->|instance| PR
    CT ---|different-from| CK
    PR -->|subclass| HC[HybridCar]
```

`cares-for-all(Taro,UenoPenguin)` の展開規則は

$$
\operatorname{instance}(x,\mathrm{UenoPenguin})\Longrightarrow
\operatorname{caresFor}(\mathrm{Taro},x)
$$

である。クラスそのものを世話するという曖昧な読み方を避け、知識2の対象を明確にする。

### Q2

**(2-1)** `Yuki instance UenoPenguin subclass Penguin subclass Bird` をたどると、Yukiは鳥の個体と判定される。上位クラスの属性を個体へ継承する規則を用いれば、鳥の `can Fly` を継承して「Yukiは飛べる」と推論する。これは与えられた知識と推論規則による結果であり、実際のペンギンの性質を保証しているわけではない。

**(2-2)** Java、C++、Pythonなどのオブジェクト指向言語のクラス継承が類似している。例えば `Penguin` を `Bird` の派生クラスとし、`Bird` に定義したメソッドをそのまま利用できる。ただしプログラムの実装継承と自然言語の分類関係は同一ではなく、鳥一般の操作を全ての派生型へ適用してよいかは別途設計する必要がある。

**(2-3)** 共通の属性や処理を上位クラスに一度だけ記述でき、重複を減らして更新箇所を集中できる。下位の概念・クラスには固有の差分だけを記述すればよい。これにより再利用性と保守性が高まるが、例外の扱いと上位クラス変更の影響を管理する必要がある。

### Q3

問い合わせを次の連言に分解し、候補の少ない条件から後向き推論を行う。

$$
\operatorname{Human}(x)\land\operatorname{caresFor}(x,\mathrm{Yuki})
\land\exists c\,[\operatorname{owns}(x,c)\land\operatorname{HybridCar}(c)].
$$

Yukiの所属クラスから `cares-for-all` を逆にたどると、まず候補として太郎を得る。太郎はHumanの個体であり、所有する `carT` はPriusの個体、PriusはHybridCarの下位クラスなので、残る条件も満たす。従って導かれる答えは $\boxed{\mathrm{Taro}}$ である。型リンクや関係の逆向き索引、継承結果の再利用によって全ノードの総当たりを避けられる。健太がYukiを世話する知識は与えられておらず、健太を答えとして導くことはできない。

### Q4

どの推論を許すかは、ネットワークの形だけでなく継承・例外処理の意味論によって変わる。

- **a)** 鳥の「飛べる」とペンギンの「飛べない」を両方とも無条件に継承すれば、正負の結論が衝突する。古典論理で両方を厳密な普遍規則とすれば不整合であり、爆発原理まで認める体系では無関係な結論も導けてしまう。
- **b)** 衝突を検出した対象の属性を未確定とし、優先順位のない対立する結論を両方保留する保守的な方式なら、どちらも採用しない。これは両方が偽と確定したという意味ではない。
- **c)** 「鳥は通常飛べる」を例外を許すデフォルト規則とし、より具体的なクラスPenguinの「飛べない」を優先させれば、Yukiについて後者だけを採用する。

c)を得るには、クラスの特殊化関係に基づく優先順位と例外による継承の遮断が必要である。既に保存した「Yukiは飛べる」という結論があれば、その根拠を管理して取り消す真理維持も必要になる。知識を追加した結果、以前の結論が撤回されるため、これは非単調推論である。元の「全ての鳥は例外なく飛べる」を厳密な規則のまま保持して、単に新しい否定規則を追加するだけではc)にはならない。
