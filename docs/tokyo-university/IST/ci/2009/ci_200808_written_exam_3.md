---
sidebar_label: '2008年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Semantic-Network
  - Knowledge-Representation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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