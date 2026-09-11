---
sidebar_label: '2016年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Otto-Diesel-and-Dual-Cycles
---

# 東京大学 工学系研究科 2016年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

圧力 $p$、比体積 $v$、絶対温度 $T$、単位質量当たりのエントロピー $s$ を用いる。理想気体の状態方程式は $pv=RT$ とする。

1. 理想気体の体膨張係数 $\alpha$ と等温圧縮率 $\kappa_T$ を求めよ。

$$
\alpha=\frac1v\left(\frac{\partial v}{\partial T}\right)_p,\qquad
\kappa_T=-\frac1v\left(\frac{\partial v}{\partial p}\right)_T.
$$

2. 一般の気体の定圧・定積比熱 $c_p,c_v$ について、次の関係を導け。

$$
c_p-c_v=\frac{vT\alpha^2}{\kappa_T}.
$$

以下を用いてよい。

$$
c_p=T\left(\frac{\partial s}{\partial T}\right)_p,\quad
c_v=T\left(\frac{\partial s}{\partial T}\right)_v,\quad
\left(\frac{\partial v}{\partial T}\right)_p=-\left(\frac{\partial s}{\partial p}\right)_T,\quad
\left(\frac{\partial p}{\partial T}\right)_v=\left(\frac{\partial s}{\partial v}\right)_T,
$$

$$
\left(\frac{\partial p}{\partial v}\right)_T
\left(\frac{\partial v}{\partial T}\right)_p
\left(\frac{\partial T}{\partial p}\right)_v=-1.
$$

3. 比熱一定の理想気体が可逆的に $(p_1,v_1,T_1)$ から $(p_2,v_2,T_2)$ に変化するとき、$s_2-s_1$ を $v_1,v_2,T_1,T_2,c_v,R$ で表せ。$R$ は単位質量当たりの気体定数とする。
4. この変化が断熱であるとき、$T_2/T_1$ を $v_1,v_2,\kappa=c_p/c_v$ で表せ。

### II

比熱一定の理想気体による図の三つの可逆サイクルを考える。$\varepsilon=v_1/v_2$ を圧縮比とする。図中の熱量 $q_A,\ldots,q_G$ は正の大きさである。

- サイクル A：1→2 断熱圧縮、2→2′ 定積吸熱 $q_A$、2′→4 断熱膨張、4→1 定積放熱 $q_E$。
- サイクル B：1→2 断熱圧縮、2→3 定圧吸熱 $q_B$、3→4 断熱膨張、4→1 定積放熱 $q_F$。$\sigma=v_3/v_2$ とする。
- サイクル C：1→2 断熱圧縮、2→2′ 定積吸熱 $q_C$、2′→3 定圧吸熱 $q_D$、3→4 断熱膨張、4→1 定積放熱 $q_G$。$\sigma=v_3/v_2$、$\rho=p_3/p_2$ とする。

![三つの熱機関の圧力・比体積線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_3_diagram_audited.svg)

1. A の効率 $\eta_A$ を $\varepsilon,\kappa$ で表せ。
2. B の効率 $\eta_B$ を $\varepsilon,\kappa,\sigma$ で表せ。
3. C の効率 $\eta_C$ を $\varepsilon,\kappa,\sigma,\rho$ で表せ。
4. $\varepsilon>2$ を三者で共通とし、$\kappa=4/3$、$\sigma=2$、$\rho>1$ とする。効率が最大・最小となるサイクルを理由とともに答えよ。$2^{1/3}=1.26$ としてよい。

#### 题目描述

I. 用 $p,v,T,s$ 表示压强、比体积、绝对温度、单位质量的熵。理想气体状态方程为 $pv=RT$。

1. 按下式求理想气体的体膨胀系数 $\alpha$ 和等温压缩率 $\kappa_T$。

$$
\alpha=\frac1v\left(\frac{\partial v}{\partial T}\right)_p,\qquad
\kappa_T=-\frac1v\left(\frac{\partial v}{\partial p}\right)_T.
$$

2. 对一般气体，证明 $c_p-c_v=vT\alpha^2/\kappa_T$。可以使用以下热容定义、麦克斯韦关系及偏导数循环关系：

$$
c_p=T\left(\frac{\partial s}{\partial T}\right)_p,\quad
c_v=T\left(\frac{\partial s}{\partial T}\right)_v,\quad
\left(\frac{\partial v}{\partial T}\right)_p=-\left(\frac{\partial s}{\partial p}\right)_T,\quad
\left(\frac{\partial p}{\partial T}\right)_v=\left(\frac{\partial s}{\partial v}\right)_T,
$$

$$
\left(\frac{\partial p}{\partial v}\right)_T
\left(\frac{\partial v}{\partial T}\right)_p
\left(\frac{\partial T}{\partial p}\right)_v=-1.
$$

3. 热容恒定的理想气体从 $(p_1,v_1,T_1)$ 可逆变化到 $(p_2,v_2,T_2)$。用 $v_1,v_2,T_1,T_2,c_v,R$ 表示比熵变化，$R$ 为单位质量气体常数。
4. 若该过程绝热，用 $v_1,v_2,\kappa=c_p/c_v$ 表示 $T_2/T_1$。

II. 考虑图示三个由定热容理想气体构成的可逆循环。压缩比为 $\varepsilon=v_1/v_2$，所有 $q$ 表示热量的正值大小。

- A：1→2 绝热压缩，2→2′ 定容吸热 $q_A$，2′→4 绝热膨胀，4→1 定容放热 $q_E$。
- B：1→2 绝热压缩，2→3 定压吸热 $q_B$，3→4 绝热膨胀，4→1 定容放热 $q_F$，截止比 $\sigma=v_3/v_2$。
- C：1→2 绝热压缩，2→2′ 定容吸热 $q_C$，2′→3 定压吸热 $q_D$，3→4 绝热膨胀，4→1 定容放热 $q_G$。截止比 $\sigma=v_3/v_2$，压力比 $\rho=p_3/p_2$。

1. 用 $\varepsilon,\kappa$ 求 A 的效率。
2. 用 $\varepsilon,\kappa,\sigma$ 求 B 的效率。
3. 用 $\varepsilon,\kappa,\sigma,\rho$ 求 C 的效率。
4. 在共同的 $\varepsilon>2$、$\kappa=4/3$、$\sigma=2$、$\rho>1$ 下，判断效率最高和最低的循环并说明理由；可取 $2^{1/3}=1.26$。

## **Kai**

### I

#### I.1

$pv=RT$ から

$$
\boxed{\alpha=\frac1T},\qquad \boxed{\kappa_T=\frac1p}.
$$

#### I.2

$s=s(T,v)$ の全微分を定圧条件で評価すると

$$
c_p-c_v
=T\left(\frac{\partial s}{\partial v}\right)_T
\left(\frac{\partial v}{\partial T}\right)_p
=T\left(\frac{\partial p}{\partial T}\right)_v v\alpha.
$$

$dv=v\alpha\,dT-v\kappa_T\,dp$ より $(\partial p/\partial T)_v=\alpha/\kappa_T$ だから

$$
\boxed{c_p-c_v=\frac{vT\alpha^2}{\kappa_T}}.
$$

#### I.3–I.4

第一法則 $Tds=c_vdT+p\,dv$ を積分すると

$$
\boxed{s_2-s_1=c_v\log\frac{T_2}{T_1}+R\log\frac{v_2}{v_1}}.
$$

可逆断熱では左辺はゼロ。$R/c_v=\kappa-1$ より

$$
\boxed{\frac{T_2}{T_1}=\left(\frac{v_1}{v_2}\right)^{\kappa-1}}.
$$

### II

#### II.1

$T_2=\varepsilon^{\kappa-1}T_1$、$T_{2'}=\varepsilon^{\kappa-1}T_4$ なので

$$
\eta_A=1-\frac{q_E}{q_A}
=1-\frac{c_v(T_4-T_1)}{c_v(T_{2'}-T_2)}
=\boxed{1-\varepsilon^{1-\kappa}}.
$$

#### II.2

$T_3=\sigma T_2$、$T_4=T_3(\sigma/\varepsilon)^{\kappa-1}=\sigma^\kappa T_1$ より

$$
\eta_B=1-\frac{c_v(T_4-T_1)}{c_p(T_3-T_2)}
=\boxed{1-\frac{\sigma^\kappa-1}{\kappa\varepsilon^{\kappa-1}(\sigma-1)}}.
$$

#### II.3

$T_{2'}=\rho T_2$、$T_3=\rho\sigma T_2$、$T_4=\rho\sigma^\kappa T_1$ である。したがって

$$
q_C+q_D=c_vT_2\{\rho-1+\kappa\rho(\sigma-1)\},\qquad
q_G=c_vT_1(\rho\sigma^\kappa-1),
$$

$$
\boxed{\eta_C=1-\frac{\rho\sigma^\kappa-1}
{\varepsilon^{\kappa-1}\{\rho-1+\kappa\rho(\sigma-1)\}}}.
$$

#### II.4

$\eta=1-g\varepsilon^{-1/3}$ と書くと

$$
g_A=1,\qquad g_B\simeq1.14,\qquad
g_C\simeq\frac{2.52\rho-1}{(7/3)\rho-1}.
$$

$\rho=1$ で $g_C=g_B$、$\rho>1$ では $g_C$ は単調減少し、極限は $2.52/(7/3)=1.08>1$ である。よって

$$
\boxed{\eta_A>\eta_C>\eta_B}.
$$

最大は A、最小は B である。

