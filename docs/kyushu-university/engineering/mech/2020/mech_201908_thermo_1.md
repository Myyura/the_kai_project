---
sidebar_label: "2020年度 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Reciprocating-and-Multistage-Compression
---

# 九州大学 工学府 機械系専攻 2020年度 熱工学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

ピストンをもつ往復動式一段圧縮機の圧力比の上限を考える。状態・過程を次のように定める。

- $1\to2$：下死点の状態 1（圧力 $p_1$、体積 $V_1$）から気体を圧縮し、圧力 $p_2$ の状態 2 にする。
- $2\to3$：排気弁が開き、圧力・温度一定で排気する。上死点で弁が閉じ、すきま容積 $V_3$ に気体が残る。
- $3\to4$：残った気体が吸気圧力 $p_4=p_1$ に達するまで膨張する。
- $4\to1$：吸気弁が開き、圧力・温度一定で吸気して下死点に至る。

各過程でピストンが気体になす仕事を $L_{12},L_{23},L_{34},L_{41}$ とする。圧力比 $\gamma=p_2/p_1$、行程容積 $V_S=V_1-V_3$、すきま比 $\sigma=V_3/V_S$、容積効率 $\eta=(V_1-V_4)/V_S$ を定義する。作動流体は比熱比 $\kappa$ が一定の理想気体。各過程は準静的で、ピストンの摩擦は無視する。

1. すきま容積のない理想圧縮機を考える。体積ゼロの状態 $3'$ まで等圧排気し、体積ゼロの状態 $4'$ から等圧吸気する。$4'\to1\to2\to3'$ の正味の仕事 $L'$ を $p_1,V_1,\kappa,\gamma$ で表せ。圧縮は断熱とする。
2. すきま容積がある場合、$1\to2\to3\to4\to1$ の正味の仕事 $L$ を $p_1,V_S,\kappa,\gamma,\eta$ で表せ。圧縮・膨張は断熱とする。
3. $p_1$ 一定で $p_2$ を増加させると、吸気できる体積は減少する。$\eta$ を $\kappa,\gamma,\sigma$ で表して説明せよ。
4. 外部から吸気できなくなる圧力比 $\gamma$ を $\kappa,\sigma$ で表せ。それ以上の圧力比を得る方法を文章で述べよ。

#### 题目描述

往复式单级压缩机依次经历：1→2 从下止点压缩至排气压力；2→3 恒压、恒温排气至上止点，余隙容积为 $V_3$；3→4 余隙气体膨胀至吸气压力；4→1 恒压、恒温吸气。定义压比 $\gamma=p_2/p_1$、行程容积 $V_S=V_1-V_3$、余隙比 $\sigma=V_3/V_S$、容积效率 $\eta=(V_1-V_4)/V_S$。气体理想、比热比 $\kappa$ 恒定，过程准静态、无活塞摩擦。① 无余隙时，压缩绝热，求包含吸排气的净输入功。② 有余隙且压缩、膨胀绝热时，用指定参数求净输入功。③ 推导容积效率与压比的关系。④ 求无法再吸气时的极限压比，并说明提高总压比的方法。

## **Kai**

### (1)

気体への仕事を正とするので $L_{ab}=-\int_a^b p\,dV$。断熱関係から $V_2=V_1\gamma^{-1/\kappa}$ であり、

$$
L'=-p_1V_1+\frac{p_2V_2-p_1V_1}{\kappa-1}+p_2V_2.
$$

したがって

$$
\boxed{L'=\frac{\kappa}{\kappa-1}p_1V_1
\left(\gamma^{(\kappa-1)/\kappa}-1\right)}.
$$

### (2)

四過程の仕事は

$$
L_{12}=\frac{p_2V_2-p_1V_1}{\kappa-1},\quad
L_{23}=p_2(V_2-V_3),\quad
L_{34}=\frac{p_1V_4-p_2V_3}{\kappa-1},\quad
L_{41}=-p_1(V_1-V_4).
$$

$p_2V_2=p_1V_1\gamma^{(\kappa-1)/\kappa}$、$p_2V_3=p_1V_4\gamma^{(\kappa-1)/\kappa}$ を用いて和を取ると

$$
\boxed{L=\frac{\kappa}{\kappa-1}\eta p_1V_S
\left(\gamma^{(\kappa-1)/\kappa}-1\right)}.
$$

この圧縮機の $p$–$V$ サイクルは、横軸を $V$、縦軸を $p$ とすると反時計回りで、$-\oint p\,dV>0$ である。

### (3)

$V_1=(1+\sigma)V_S$、$V_4=V_3\gamma^{1/\kappa}=\sigma V_S\gamma^{1/\kappa}$ より

$$
\boxed{\eta=1+\sigma-\sigma\gamma^{1/\kappa}}.
$$

$\sigma>0$ なら $\partial\eta/\partial\gamma=-(\sigma/\kappa)\gamma^{1/\kappa-1}<0$。圧力比が増すと余隙気体がより大きな体積まで再膨張し、新しく吸い込める体積が減る。

### (4)

$V_4=V_1$、すなわち $\eta=0$ が限界条件なので

$$
\boxed{\gamma_{\max}=\left(1+\frac1\sigma\right)^\kappa}.
$$

より大きい総圧力比には多段圧縮を用い、各段の圧力比をその段の限界以下にする。例えば $n$ 段に等しく分担すれば、一段の圧力比は総圧力比の $1/n$ 乗となる。段間冷却を加えると次段の吸入温度を低下させ、圧縮仕事と吐出温度を抑えられる。余隙比 $\sigma$ 自体を小さくすることも限界の改善につながる。

## **Reference**

- [九州大学 2020年度 熱工学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-thermo.pdf)
