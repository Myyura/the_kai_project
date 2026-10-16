---
sidebar_label: "2023年度 化学II 物理化学 問1"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Otto-Cycle
---

# 京都大学 工学研究科 先端化学専攻群 2023年度 化学II 物理化学 問1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%85%88%E7%AB%AF%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_2_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

図1は、1モルの理想気体が可逆的に $\mathrm A\to\mathrm B\to\mathrm C\to\mathrm D\to\mathrm A$ と循環するサイクルである。$R$ は気体定数、$C_V,C_p$ はそれぞれこの気体の定容熱容量、定圧熱容量であり、温度に対して一定である。

![図1 循環サイクルにおける圧力と体積の関係](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/kyoto_university/engineering/advanced-chemistry/2023/kyoto_advanced_202208_chem2_phys_1_fig1.png)

状態 A, B, C, D はそれぞれ $(p_1,V_1,T_1)$、$(p_2,V_2,T_2)$、$(p_3,V_2,T_3)$、$(p_4,V_1,T_4)$ である。A→B と C→D は断熱過程、B→C と D→A は定容過程であり、$V_1>V_2$ である。

(1) 次の量を $T_1,T_2,T_3,T_4,R,C_V$ のうち必要なものを用いて表せ。

- (a) A→B において外界にした仕事。
- (b) B→C において外界にした仕事。
- (c) B→C において外界から得た熱量。
- (d) B→C におけるエントロピー変化。

(2) $\gamma=C_p/C_V$ とするとき、A→B において

$$
\frac{T_2}{T_1}=\left(\frac{V_1}{V_2}\right)^{\gamma-1}
$$

が成り立つことを示せ。必要ならば $C_p-C_V=R$ を用いてよい。

(3) 熱機関の効率は $\eta=(\text{系のした仕事})/(\text{系に加えられた熱量})$ と定義される。このサイクルの効率を $V_1,V_2,\gamma$ で表せ。

#### 题目描述

1 mol 理想气体按图1沿 A→B→C→D→A 做可逆循环。四个状态分别为 $(p_1,V_1,T_1)$、$(p_2,V_2,T_2)$、$(p_3,V_2,T_3)$、$(p_4,V_1,T_4)$。A→B、C→D 为绝热过程，B→C、D→A 为定容过程，$V_1>V_2$。定容、定压热容 $C_V,C_p$ 均与温度无关，气体常数为 $R$。

(1) 用各状态的温度和 $R,C_V$ 中必要的量表示：(a) A→B 对外做功；(b) B→C 对外做功；(c) B→C 吸热；(d) B→C 的熵变。

(2) 令 $\gamma=C_p/C_V$，证明 $T_2/T_1=(V_1/V_2)^{\gamma-1}$，可使用 $C_p-C_V=R$。

(3) 用 $V_1,V_2,\gamma$ 表示循环效率，即净输出功与吸入热量的比值。

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
\eta=\frac{C_V(T_1-T_2+T_3-T_4)}{C_V(T_3-T_2)}
=1-\frac{T_4-T_1}{T_3-T_2}.
$$

$r=V_1/V_2$ とおくと、二つの断熱過程から $T_2=r^{\gamma-1}T_1$、$T_3=r^{\gamma-1}T_4$。したがって

$$
\boxed{\eta=1-r^{1-\gamma}=1-\left(\frac{V_2}{V_1}\right)^{\gamma-1}}.
$$

## **Reference**

- [京都大学公式問題：2023年度化学II、物理化学問1（PDF 3ページ、2022年8月22日実施）](https://www.cse.t.kyoto-u.ac.jp/ja/admission/exam/yxmfpo.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%85%88%E7%AB%AF%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_2_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html)
