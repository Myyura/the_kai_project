---
sidebar_label: "2018年7月実施 情報数理応用 問題6"
tags:
  - Waseda-University
  - Probability-Statistics.Bayesian-Statistics.Bayesian-Inference
  - Probability-Statistics.Bayesian-Statistics.Beta-Bernoulli-Model
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Data-Science-Artificial-Intelligence.Machine-Learning.K-Means
  - Data-Science-Artificial-Intelligence.Machine-Learning.Naive-Bayes
  - Data-Science-Artificial-Intelligence.Artificial-Intelligence.Morphological-Analysis
  - Computer-Science.Information-Theory.Entropy
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 情報数理応用 問題6

## **Author**
祭音Myyura

## **Description**

統計学、情報理論、パターン認識、機械学習に関する次の問いに答えよ。

1. $P(X_i=1\mid\theta)=\theta$ のベルヌーイ情報源に一様事前分布を仮定する。長さ $n$ の列で1が $y$ 回観測されたとき、$\theta$ の事後密度、平均、最頻値を求めよ。
2. 同じベルヌーイモデルで $2\leq y\leq n-2$ とする。尤度関数を示し、概形と最尤推定量を求めよ。
3. $k$-means 法の概要、長所、短所を説明せよ。
4. 多次元データを分類するナイーブベイズ法の概要、長所、短所を説明せよ。
5. 自然言語テキストに適用される形態素解析を説明せよ。
6. 記号 $a_1,\ldots,a_M$ が確率 $p_1,\ldots,p_M$ で独立同分布に生成される情報源 $X$ のエントロピーを示し、その意味を複数の観点から説明せよ。

### 题目描述

回答下列有关统计学、信息论、模式识别与机器学习的问题。

1. 对满足 $P(X_i=1\mid\theta)=\theta$ 的伯努利信源，假设参数 $\theta$ 服从均匀先验分布。长度为 $n$ 的观测序列中共有 $y$ 个 1，求 $\theta$ 的后验概率密度、后验均值与后验众数。
2. 对同一个伯努利模型，进一步设 $2\leq y\leq n-2$。写出似然函数，画出其大致形状，并求 $\theta$ 的最大似然估计量。
3. 说明 $k$-means 方法的基本过程、优点与缺点。
4. 说明用来对多维数据分类的朴素贝叶斯方法的基本原理、优点与缺点。
5. 说明应用于自然语言文本的形态素分析。
6. 信源 $X$ 以概率 $p_1,\ldots,p_M$ 独立同分布地产生符号 $a_1,\ldots,a_M$。写出该信源的熵，并从多个角度说明熵的含义。

## **Kai**

### [小問 1]

一様事前分布は $\operatorname{Beta}(1,1)$ である。尤度は $\theta^y(1-\theta)^{n-y}$ に比例するので、共役性より

$$
\theta\mid x^n\sim\operatorname{Beta}(y+1,n-y+1).
$$

したがって事後密度は

$$
\boxed{
p(\theta\mid x^n)
=\frac{\Gamma(n+2)}{\Gamma(y+1)\Gamma(n-y+1)}
\theta^y(1-\theta)^{n-y},\quad0\leq\theta\leq1
}.
$$

事後平均と、$0<y<n$ の場合の最頻値は

$$
\boxed{E[\theta\mid x^n]=\frac{y+1}{n+2}},\qquad
\boxed{\theta_{\mathrm{mode}}=\frac yn}.
$$

$y=0$ なら最頻値は0、$y=n$ なら1である。

### [小問 2]

観測された具体的な列に対する尤度は

$$
\boxed{L(\theta)=\theta^y(1-\theta)^{n-y}},\qquad0\leq\theta\leq1.
$$

$2\leq y\leq n-2$ なので両端で0となり、区間内部の1点まで増加してから減少する。対数尤度を微分すると

$$
\frac{d}{d\theta}\log L(\theta)
=\frac y\theta-\frac{n-y}{1-\theta}.
$$

これを0とおけば

$$
\boxed{\hat\theta_{\mathrm{ML}}=\frac yn}.
$$

### [小問 3]

$k$-means 法は、各標本を最も近いクラスタ中心へ割り当てる操作と、各クラスタ中心を所属標本の平均へ更新する操作を、割当てが変化しなくなるまで交互に行う。クラスタ内平方和を局所的に最小化する方法である。

長所は実装が簡単で計算量が比較的小さく、大規模な数値データにも適用しやすいことである。短所は $k$ を事前に指定する必要があり、初期値によって局所解が変わること、外れ値・尺度に敏感で、球状かつ同程度の大きさでないクラスタを捉えにくいことである。

### [小問 4]

特徴ベクトル $\boldsymbol x=(x_1,\ldots,x_d)$ とクラス $C_k$ に対し、条件付き独立

$$
P(\boldsymbol x\mid C_k)=\prod_{j=1}^dP(x_j\mid C_k)
$$

を仮定し、

$$
\hat C=\arg\max_kP(C_k)\prod_jP(x_j\mid C_k)
$$

で分類する。少量データでも学習と予測が高速で、高次元・疎なテキスト特徴に強い。一方、特徴間の依存を無視するため仮定が大きく破れると精度や確率校正が悪化し、未観測カテゴリには平滑化が必要となる。

### [小問 5]

形態素解析は、空白で単語境界が明示されない日本語などの文を、意味を担う最小単位である形態素へ分割し、各形態素に原形、品詞、活用形、読みなどを付与する処理である。辞書と接続コストを用いる動的計画法や統計モデルにより、複数の分割・品詞候補から文全体として最も妥当な系列を選ぶ。検索、構文解析、機械翻訳などの前処理となる。

### [小問 6]

対数の底を2とすれば、エントロピーは

$$
\boxed{H(X)=-\sum_{i=1}^Mp_i\log_2p_i}
$$

で、単位は bit である。

- 観測前の不確実性、または観測によって平均的に得られる情報量を表す。
- 一意復号可能な2進符号の平均符号長の理論的下限を与える。
- 分布が一様なとき最大 $\log_2M$、1記号に集中すると0となるため、記号の多様性・予測困難性を表す。
- 独立な記号列ではエントロピーが加法的となり、典型列の個数がおよそ $2^{nH(X)}$ になるため、圧縮可能率を決める。
