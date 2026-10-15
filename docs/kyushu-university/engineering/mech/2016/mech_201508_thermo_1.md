---
sidebar_label: "2016年度 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.First-Law
---

# 九州大学 工学府 機械系専攻 2016年度 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

〔A〕 気体の圧力・比体積・温度・比内部エネルギー・比エンタルピーを $p,v,T,u,h$、気体定数を $R$、比熱を $c_v,c_p$、比熱比を $\kappa$ とする。

1. 理想気体では $c_p-c_v=R$ を示せ。$u=u(T)$、$du=c_vdT$、$dh=c_pdT$ は既知としてよい。
2. 比熱一定の理想気体について、準静的断熱変化で $pv^\kappa$ が一定となることを示せ。

〔B〕 断熱シリンダと摩擦のないピストン内に、比熱比一定の理想気体が密閉されている。初期状態 0 は大気圧 $p_0$、体積 $V_0$。外力を加えず内部ヒータで緩やかに総熱量 $Q>0$ を加えると、体積 $V_1$ の状態 1 となる。

再び状態 0 から始め、今度はピストンを固定して同じ $Q$ を加えた状態を 2 とする。その後加熱を止め、ピストンを手でゆっくり動かして体積 $V_1$ の状態 3 にする。全変化は準静的とする。$p_0,V_0,\kappa,Q$ を用いて答えよ。（全 55 点）

![断熱シリンダとヒータ（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/thermo-1-original.png)

1. $V_1$ を求めよ。
2. 状態 3 の圧力 $p_3$ を求めよ。
3. $p_0$ と $p_3$ の大小関係を選べ。
4. 気体のした仕事 $L_{01}$ と $L_{23}$ の大小関係を選べ。
5. B(3) の関係を証明せよ。
6. B(4) の関係を証明せよ。B(3) を用いてよい。

#### 题目描述

先证明理想气体的 Mayer 关系以及比热恒定时的准静态绝热关系。绝热气缸初态为 $p_0,V_0$：第一条路径在大气压下缓慢加热 $Q$，达到 $V_1$；第二条路径先定容加热同量 $Q$，再绝热膨胀至同一体积。求 $V_1,p_3$，比较两条路径的最终压力及膨胀功并证明。

## **Kai**

### A(1)

$h=u+pv=u+RT$ を温度で微分すると $c_p=c_v+R$。よって $\boxed{c_p-c_v=R}$。

### A(2)

断熱の第一法則より $c_vdT=-p\,dv$。$p\,dv+v\,dp=R\,dT$ に代入し、$R/c_v=\kappa-1$ を使うと

$$
\frac{dp}{p}+\kappa\frac{dv}{v}=0,
\qquad\boxed{pv^\kappa=\mathrm{const}.}
$$

### B(1)

気体全体の内部エネルギーは $U=pV/(\kappa-1)$ なので

$$
Q=\frac{p_0(V_1-V_0)}{\kappa-1}+p_0(V_1-V_0),
\qquad\boxed{V_1=V_0+\frac{\kappa-1}{\kappa}\frac Q{p_0}.}
$$

### B(2)

定積加熱より $p_2=p_0+(\kappa-1)Q/V_0$。続く断熱膨張では

$$
\boxed{p_3=\left[p_0+\frac{(\kappa-1)Q}{V_0}\right]
\left[1+\frac{(\kappa-1)Q}{\kappa p_0V_0}\right]^{-\kappa}.}
$$

### B(3), B(4)

$$
\boxed{p_0>p_3,\qquad L_{01}<L_{23}.}
$$

### B(5)

$a=(\kappa-1)Q/(p_0V_0)>0$ とおく。$\kappa>1$ より、厳密な Bernoulli の不等式

$$
(1+a/\kappa)^\kappa>1+a
$$

が成り立つため、$p_3/p_0=(1+a)/(1+a/\kappa)^\kappa<1$。

### B(6)

両経路の受熱量は $Q$ で等しく、最終体積はともに $V_1$ なので、第一法則から

$$
L_{23}-L_{01}=U_1-U_3
=\frac{(p_0-p_3)V_1}{\kappa-1}>0.
$$

また、$L_{01}=(\kappa-1)Q/\kappa$、$L_{23}=(p_2V_0-p_3V_1)/(\kappa-1)$ でも確認できる。
