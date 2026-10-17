---
sidebar_label: "2022年8月実施 専門科目2 問題I"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Irreversible-Processes
  - Physics.Thermodynamics.Entropy
---

# 京都大学 工学研究科 化学工学専攻 2022年8月実施 専門科目2 問題I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%8C%96%E5%AD%A6%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_2_1.html) refined with GPT 6 Astra)

## **Description**

図1に示すように、断熱壁で覆われた容積 $V_2$ の容器内に断熱の仕切板が設置されており、空間1と空間2の $2$ つに区切られている。空間1の容積は $V_1$ であり、$N_1\,\mathrm{mol}$ の気体が封入されている一方で、空間2は真空に保たれている。平衡状態における空間1の温度は $T_1$ であり、これを状態 $\alpha$ とする。状態 $\alpha$ から、気体に力を及ぼさないように仕切板を容器から引き抜き、気体を膨張させたところ、やがて系は平衡状態に達し、温度は $T_2$ となった。この平衡状態を状態 $\beta$ とする。封入されている気体が、式 (1) の状態方程式に従う van der Waals 気体であるとき、状態 $\alpha$ から状態 $\beta$ への遷移に関する以下の問いに答えよ。

![図1 状態α](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/chemical-engineering/2023/kyoto_chemeng_202208_special2_1_fig1.png)

$$
\left(P+\frac{aN^2}{V^2}\right)(V-bN)=NRT\tag{1}
$$

ここで、$P$：圧力、$V$：体積、$N$：物質量、$R$：気体定数、$T$：温度、$a,b$：正の定数である。また、仕切板の体積は無視でき、この操作によって相変化は起こらないものとする。

**問1** 状態 $\alpha$ から状態 $\beta$ への変化に伴い、気体が吸収した熱量 $Q$ と容器内の内部エネルギー変化 $\Delta U$ を求めよ。

**問2** 式 (2) で表される熱力学状態方程式を用いて、状態 $\alpha$ から状態 $\beta$ への変化に伴う温度変化 $\Delta T$ を、$V_1,V_2,N_1,a$、定容モル熱容量 $C_{v,m}$ を用いて表せ。なお、$C_{v,m}$ は定数とみなして良い。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P\tag{2}
$$

**問3** $\left(\dfrac{\partial S}{\partial V}\right)_U$ を評価することで、状態 $\alpha$ から状態 $\beta$ への変化が不可逆過程であることを示せ。

**問4** 状態 $\alpha$ から状態 $\beta$ への変化に伴うエントロピー変化 $\Delta S$ を求めよ。

**問5** 封入されている気体が理想気体である場合、同様の操作により生じる温度変化 $\Delta'T$ を $\Delta T$ と比較し、その違いの原因について、理想気体と van der Waals 気体の性質に基づいて説明せよ。

#### 题目描述

如图1所示，体积为 $V_2$、外覆绝热壁的容器内设有绝热隔板，将容器分为区域1和区域2。区域1的体积为 $V_1$，装有 $N_1\,\mathrm{mol}$ 气体；区域2保持真空。平衡时区域1的温度为 $T_1$，将此状态记为 $\alpha$。从状态 $\alpha$ 出发，以不对气体施力的方式抽出隔板，使气体膨胀。系统最终达到温度为 $T_2$ 的平衡态，将其记为状态 $\beta$。若气体为服从式 (1) 的范德瓦耳斯气体，回答有关从状态 $\alpha$ 到状态 $\beta$ 的以下问题。

![图1 状态α](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/chemical-engineering/2023/kyoto_chemeng_202208_special2_1_fig1.png)

$$
\left(P+\frac{aN^2}{V^2}\right)(V-bN)=NRT.\tag{1}
$$

其中 $P$ 为压强，$V$ 为体积，$N$ 为物质的量，$R$ 为气体常数，$T$ 为温度，$a,b$ 为正常数。隔板体积可忽略，且此操作不引起相变。

**问1** 求从状态 $\alpha$ 到状态 $\beta$ 的过程中气体吸收的热量 $Q$ 和容器内的内能变化 $\Delta U$。

**问2** 利用式 (2) 的热力学状态方程，用 $V_1,V_2,N_1,a$ 和定容摩尔热容 $C_{v,m}$ 表示此过程的温度变化 $\Delta T$。可将 $C_{v,m}$ 视为常数。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P.\tag{2}
$$

**问3** 通过计算 $\left(\dfrac{\partial S}{\partial V}\right)_U$，证明从状态 $\alpha$ 到状态 $\beta$ 的变化为不可逆过程。

**问4** 求此过程的熵变 $\Delta S$。

**问5** 若容器内为理想气体，将同样操作引起的温度变化 $\Delta'T$ 与 $\Delta T$ 比较，并根据理想气体与范德瓦耳斯气体的性质解释差异的原因。

## **Kai**

### 問1

容器は断熱され、真空に向かう自由膨張なので外部への仕事もない。したがって

$$
\boxed{Q=0,\qquad\Delta U=Q-W=0}.
$$

### 問2

物質量は $N_1$ に固定される。状態方程式と式 (2) より

$$
\left(\frac{\partial U}{\partial V}\right)_T
=\frac{aN_1^2}{V^2}.
$$

系全体の定容熱容量は $N_1C_{\mathrm{v,m}}$ なので

$$
dU=N_1C_{\mathrm{v,m}}\,dT+\frac{aN_1^2}{V^2}\,dV.
$$

両端の内部エネルギーが等しいことから

$$
0=N_1C_{\mathrm{v,m}}(T_2-T_1)
+aN_1^2\left(\frac1{V_1}-\frac1{V_2}\right).
$$

よって

$$
\boxed{\Delta T=-\frac{aN_1}{C_{\mathrm{v,m}}}
\left(\frac1{V_1}-\frac1{V_2}\right)<0}.
$$

### 問3

平衡状態間の基本関係 $dU=T\,dS-P\,dV$ から

$$
\boxed{\left(\frac{\partial S}{\partial V}\right)_U=\frac PT>0}.
$$

正の圧力、温度をもつ気体の状態範囲では、内部エネルギー一定のまま体積が増加するとエントロピーは増加する。容器は孤立しているため、この $\Delta S>0$ は内部でのエントロピー生成を表し、過程は不可逆である。

### 問4

状態関数の微分を用いて

$$
\begin{gathered}
dS=\frac{dU+P\,dV}{T}\\
=N_1C_{\mathrm{v,m}}\frac{dT}{T}
+\frac{N_1R}{V-bN_1}\,dV.
\end{gathered}
$$

したがって

$$
\boxed{\Delta S=N_1C_{\mathrm{v,m}}\ln\frac{T_2}{T_1}
+N_1R\ln\frac{V_2-bN_1}{V_1-bN_1}},
$$

ただし

$$
T_2=T_1-\frac{aN_1}{C_{\mathrm{v,m}}}
\left(\frac1{V_1}-\frac1{V_2}\right).
$$

実際の自由膨張中に一様な圧力や温度を仮定する必要はなく、上式は両端の平衡状態から求めたものである。

### 問5

理想気体では $U$ は温度だけの関数なので、$\Delta U=0$ から

$$
\boxed{\Delta T'=0>\Delta T}.
$$

理想気体には分子間相互作用による内部エネルギーがない。一方、van der Waals 気体では分子間引力があり、膨張により分子間距離が増すと相互作用のポテンシャルエネルギーが増加する。全内部エネルギーが一定なので熱運動のエネルギーが減少し、温度が下がる。

## **Reference**

- [京都大学公式問題：2023年度化学工学専攻、専門科目2問題I（PDF 15ページ、2022年8月22日実施）](https://www.ch.t.kyoto-u.ac.jp/ja/admission/exam/2023-master-exam)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%8C%96%E5%AD%A6%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_2_1.html)
