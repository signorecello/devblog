---
title: How identities can help the war
date: 2022-02-26T17:34:52.910Z
featuredImage: assets/1x-1.jpeg
---
Blockchain isn't really a political thing. And that's for a reason: it trusts in maths and economics, and not really in people. The whole idea of blockchain is removing trust from some equations involving sensitive data and people.

This quote from Vitalik says it all for me:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Reminder: Ethereum is neutral, but I am not.</p>&mdash; vitalik.eth (@VitalikButerin) <a href="https://twitter.com/VitalikButerin/status/1496695587495981056?ref_src=twsrc%5Etfw">February 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Blockchain doesn't magically solve *people*. What it does solve is the amount of effort needed to maintain high levels of trust in a society, specially when it is so polarized as ours.

## The first casualty of war is truth

This old adage is more true than ever, at the present day. Misinformation is the cancer of the XXI century, and there's no way of knowing where exactly does information come from. Ultimately, it always depends on what sources do you trust. If you trust the Russian channels, you hear one thing. If you trust western channels, you hear another.

Blockchain has some potential of removing some of this trust, leaving only the raw data. If information enters the blockchain as soon as possible to the source, there's less space for manipulation, and everyone absolutely needs to trust it.

Let's say that there's an explosion in an hospital. Witnesses could go there, gather evidences, and in an ideal world, have a way to immediately convey it to some trustless storage. Russian army can say one thing, and Ukraine defense can say another, but both parties would be able to convey raw data that cannot be manipulated by states and propaganda. Also, this would mean every piece of information has a timestamp and an owner, which is useful for further inquiries.

## T﻿he case for identity

I﻿f this was really that easy, it would already be used. The problem is that there is currently no way of undeniably connecting a signature with a real person. 
I﻿n other words, y﻿ou want to prove you're an NGO member and you do control an Ethereum Private Key, yet you don't want to disclose your real identity. You don't want this pseudonymous address to have anything to do with your real identity, which means 0 transactions between the two. And you want a way of being able to revocate your "NGO member" status in case your real identity becomes compromised.

L﻿et's assume I'm a western spy inside Russia's high ranks. My address is _alice.eth_ and I use this account for all kinds of things, like buying games, voting on DAOs, receiving mining rewards, etc. However, I also want to leak some information on Russia's government, yet I do not want to trust anyone to broadcast my information and, obviously, I don't want to use _alice.eth_ for that, as its funds could be easily traced back to my real identity.

W﻿hat I want is another address _thespy.eth_, that has an identity proof, say using [sismo](https://www.sismo.io/) or [iden3](https://iden3.io). This means someone has provided me with a badge (in the case of Sismo) or claim (for iden3), using whatever sources of information needed. They can prove I'm real, and that I belong to whatever western organization.

To interact with smart contracts you generally need to have some coins to pay for fees. How do you fund this without leaving a digital footprint that could potentially trace _thespy.eth_ back to _alice.eth_? One solution would be to use [Aztec](https://aztec.network), which is a company I just recently joined as a DevRel. Using zk.money, _alice.eth_ could shield some ETH, and later withdraw it to _thespy.eth_. This way, they would be keeping their privacy intact.

## More truth = Less war

I﻿f you've ever played the "phone game", you notice that any information that takes more than 2-3 "hops" very easily becomes false. Adding middleman, even if they're well-intentioned, is almost always recipe for disaster.

W﻿e want an almost direct phone line between source (the ones on the ground) and consumer (everyone else). Blockchain and zero-knowledge technology opens new opportunities for this communication to be _almost_ censorship-resistant, by hiding identities yet proving statements about their eligibility.