---
sidebar_label: "2022年8月実施 化学II 物理化学 問1"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Otto-Cycle
---

# 京都大学 工学研究科 先端化学専攻群 2022年8月実施 化学II 物理化学 問1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%85%88%E7%AB%AF%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_2_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

図1は $1$ モルの理想気体が可逆的に A→B→C→D→A と循環するサイクルである。以下の問いに答えよ。ただし、$R$ は気体定数、$C_V$ および $C_p$ はそれぞれこの気体の定容熱容量および定圧熱容量であり、温度に対して一定である。

![図1 循環サイクルにおける圧力p–体積Vの関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/advanced-chemistry/2023/kyoto_advanced_202208_chem2_phys_1_fig1.png)

**(1)** このサイクルに関して、次の (a)～(d) の物理量を温度 $T_1,T_2,T_3,T_4$、および $R,C_V$ のうち必要なものを用いて表せ。

(a) 過程 A→B における外界にした仕事

(b) 過程 B→C における外界にした仕事

(c) 過程 B→C における外界から得た熱量

(d) 過程 B→C におけるエントロピー変化

**(2)** 過程 A→B において、下記の関係が成り立つことを示せ。ただし、$\gamma=C_p/C_V$ である。また、必要があれば、$C_p-C_V=R$ を使用してもよい。

$$
\frac{T_2}{T_1}=\left(\frac{V_1}{V_2}\right)^{\gamma-1}\tag{i}
$$

**(3)** 一般に、熱機関の効率 $\eta$ は、

$$
\eta=\frac{\text{系のした仕事}}{\text{系に加えられた熱量}}\tag{ii}
$$

で定義される。このサイクルの効率を $V_1,V_2,\gamma$ を用いて表せ。

### 题目描述

图1为 $1$ 摩尔理想气体可逆地沿 A→B→C→D→A 循环的过程。回答以下问题。其中 $R$ 为气体常数，$C_V,C_p$ 分别为该气体的定容热容和定压热容，均不随温度变化。

![图1 循环中的压强p与体积V的关系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/advanced-chemistry/2023/kyoto_advanced_202208_chem2_phys_1_fig1.png)

**(1)** 对于此循环，用温度 $T_1,T_2,T_3,T_4$ 及 $R,C_V$ 中所需的量表示下列物理量。

(a) 过程 A→B 中气体对外做的功。

(b) 过程 B→C 中气体对外做的功。

(c) 过程 B→C 中气体从外界吸收的热量。

(d) 过程 B→C 中的熵变。

**(2)** 证明过程 A→B 满足下列关系，其中 $\gamma=C_p/C_V$。必要时可使用 $C_p-C_V=R$。

$$
\frac{T_2}{T_1}=\left(\frac{V_1}{V_2}\right)^{\gamma-1}\tag{i}
$$

**(3)** 一般地，热机效率 $\eta$ 定义为

$$
\eta=\frac{\text{系统所做的功}}{\text{向系统输入的热量}}.\tag{ii}
$$

用 $V_1,V_2,\gamma$ 表示此循环的效率。

## **Kai**

気体が外界にする仕事を正とし、熱力学第1法則を $\Delta U=Q-W$ と書く。

### (1)

理想気体について $\Delta U=C_V\Delta T$ である。

(a) A→B は断熱過程なので

$$
\boxed{W_{\mathrm{AB}}=C_V(T_1-T_2)}.
$$

(b) B→C では $dV=0$ なので

$$
\boxed{W_{\mathrm{BC}}=0}.
$$

(c) 第1法則より

$$
\boxed{Q_{\mathrm{BC}}=C_V(T_3-T_2)}.
$$

(d) 可逆定容過程では $dS=C_V\,dT/T$ であるから

$$
\boxed{\Delta S_{\mathrm{BC}}=C_V\ln\frac{T_3}{T_2}}.
$$

### (2)

可逆断熱過程では $C_V\,dT=-p\,dV=-RT\,dV/V$。したがって

$$
C_V\ln\frac{T_2}{T_1}=-R\ln\frac{V_2}{V_1}.
$$

$R/C_V=\gamma-1$ より

$$
\boxed{\frac{T_2}{T_1}=\left(\frac{V_1}{V_2}\right)^{\gamma-1}}.
$$

### (3)

C→D の仕事は $C_V(T_3-T_4)$、D→A の仕事は $0$ である。よって

$$
\begin{gathered}
\eta=\frac{C_V(T_1-T_2+T_3-T_4)}{C_V(T_3-T_2)}\\
=1-\frac{T_4-T_1}{T_3-T_2}.
\end{gathered}
$$

$r=V_1/V_2$ とおくと、二つの断熱過程から $T_2=r^{\gamma-1}T_1$、$T_3=r^{\gamma-1}T_4$。したがって

$$
\boxed{\eta=1-r^{1-\gamma}=1-\left(\frac{V_2}{V_1}\right)^{\gamma-1}}.
$$

## **Reference**

- [京都大学公式問題：2023年度化学II、物理化学問1（PDF 3ページ、2022年8月22日実施）](https://www.cse.t.kyoto-u.ac.jp/ja/admission/exam/yxmfpo.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%85%88%E7%AB%AF%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_2_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html)
