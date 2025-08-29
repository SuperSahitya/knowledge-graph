data = [
  GraphDocument(
    (nodes = [
      Node((id = "Elon Reeve Musk"), (type = "Person"), (properties = {})),
      Node((id = "Tesla"), (type = "Organization"), (properties = {})),
      Node((id = "Spacex"), (type = "Organization"), (properties = {})),
      Node((id = "X"), (type = "Organization"), (properties = {})),
      Node((id = "Twitter"), (type = "Organization"), (properties = {})),
      Node(
        (id = "Department Of Government Efficiency (Doge)"),
        (type = "Organization"),
        (properties = {})
      ),
      Node((id = "Forbes"), (type = "Organization"), (properties = {})),
      Node((id = "June 28, 1971"), (type = "Date"), (properties = {})),
      Node(
        (id = "Wealthiest Person In The World"),
        (type = "Status"),
        (properties = {})
      ),
      Node((id = "2021"), (type = "Year"), (properties = {})),
      Node(
        (id = "Us$424.7 Billion"),
        (type = "Monetary value"),
        (properties = {})
      ),
      Node((id = "May 2025"), (type = "Date"), (properties = {})),
    ]),
    (relationships = [
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "June 28, 1971"),
          (type = "Date"),
          (properties = {})
        )),
        (type = "BORN_ON"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "Tesla"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "LEADS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "Spacex"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "LEADS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node((id = "X"), (type = "Organization"), (properties = {}))),
        (type = "LEADS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "Department Of Government Efficiency (Doge)"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "LEADS"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "X"), (type = "Organization"), (properties = {}))),
        (target = Node(
          (id = "Twitter"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "FORMERLY_KNOWN_AS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "Wealthiest Person In The World"),
          (type = "Status"),
          (properties = {})
        )),
        (type = "HOLDS_STATUS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Wealthiest Person In The World"),
          (type = "Status"),
          (properties = {})
        )),
        (target = Node((id = "2021"), (type = "Year"), (properties = {}))),
        (type = "SINCE"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Reeve Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "Us$424.7 Billion"),
          (type = "Monetary value"),
          (properties = {})
        )),
        (type = "HAS_NET_WORTH"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Forbes"),
          (type = "Organization"),
          (properties = {})
        )),
        (target = Node(
          (id = "Us$424.7 Billion"),
          (type = "Monetary value"),
          (properties = {})
        )),
        (type = "ESTIMATES"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Us$424.7 Billion"),
          (type = "Monetary value"),
          (properties = {})
        )),
        (target = Node((id = "May 2025"), (type = "Date"), (properties = {}))),
        (type = "AS_OF"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        '"Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman, known for his leadership of Tesla, SpaceX, X (formerly Twitter), and the Department of Government Efficiency (DOGE). Musk has been the wealthiest person in the world since 2021; as of May 2025, Forbes estimates his net worth to be US$424.7 billion.')
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Elon Musk"), (type = "Person"), (properties = {})),
      Node((id = "Pretoria"), (type = "City"), (properties = {})),
      Node((id = "South Africa"), (type = "Country"), (properties = {})),
      Node((id = "Canada"), (type = "Country"), (properties = {})),
      Node(
        (id = "University Of Pennsylvania"),
        (type = "Organization"),
        (properties = {})
      ),
      Node((id = "California"), (type = "State"), (properties = {})),
      Node((id = "United States"), (type = "Country"), (properties = {})),
      Node((id = "Zip2"), (type = "Company"), (properties = {})),
      Node((id = "X.Com"), (type = "Company"), (properties = {})),
      Node((id = "Paypal"), (type = "Company"), (properties = {})),
      Node((id = "Ebay"), (type = "Company"), (properties = {})),
    ]),
    (relationships = [
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node((id = "Pretoria"), (type = "City"), (properties = {}))),
        (type = "BORN_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Pretoria"), (type = "City"), (properties = {}))),
        (target = Node(
          (id = "South Africa"),
          (type = "Country"),
          (properties = {})
        )),
        (type = "LOCATED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node((id = "Canada"), (type = "Country"), (properties = {}))),
        (type = "EMIGRATED_TO_IN_1989"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "University Of Pennsylvania"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "RECEIVED_DEGREES_FROM_IN_1997"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "California"),
          (type = "State"),
          (properties = {})
        )),
        (type = "MOVED_TO"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "California"),
          (type = "State"),
          (properties = {})
        )),
        (target = Node(
          (id = "United States"),
          (type = "Country"),
          (properties = {})
        )),
        (type = "LOCATED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node((id = "Zip2"), (type = "Company"), (properties = {}))),
        (type = "CO_FOUNDED_IN_1995"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Zip2"), (type = "Company"), (properties = {}))),
        (target = Node((id = "1999"), (type = "Year"), (properties = {}))),
        (type = "WAS_SOLD_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node((id = "X.Com"), (type = "Company"), (properties = {}))),
        (type = "CO_FOUNDED"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "X.Com"), (type = "Company"), (properties = {}))),
        (target = Node((id = "Paypal"), (type = "Company"), (properties = {}))),
        (type = "MERGED_TO_FORM"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Paypal"), (type = "Company"), (properties = {}))),
        (target = Node((id = "Ebay"), (type = "Company"), (properties = {}))),
        (type = "ACQUIRED_BY_IN_2002"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Elon Musk"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "United States"),
          (type = "Country"),
          (properties = {})
        )),
        (type = "BECAME_CITIZEN_OF_IN_2002"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "Born to a wealthy family in Pretoria, South Africa, Musk emigrated in 1989 to Canada. He received bachelor's degrees from the University of Pennsylvania in 1997 before moving to California, United States, to pursue business ventures. In 1995, Musk co-founded the software company Zip2. Following its sale in 1999, he co-founded X.com, an online payment company that later merged to form PayPal, which was acquired by eBay in 2002. That year, Musk also became an American citizen.")
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Musk"), (type = "Person"), (properties = {})),
      Node((id = "Spacex"), (type = "Company"), (properties = {})),
      Node((id = "Tesla"), (type = "Company"), (properties = {})),
      Node((id = "Openai"), (type = "Organization"), (properties = {})),
      Node((id = "Reusable Rockets"), (type = "Technology"), (properties = {})),
      Node(
        (id = "Commercial Spaceflight"),
        (type = "Field"),
        (properties = {})
      ),
      Node(
        (id = "Electric Vehicles"),
        (type = "Product category"),
        (properties = {})
      ),
      Node(
        (id = "Artificial Intelligence (Ai) Research"),
        (type = "Field"),
        (properties = {})
      ),
    ]),
    (relationships = [
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Spacex"), (type = "Company"), (properties = {}))),
        (type = "FOUNDED"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Spacex"), (type = "Company"), (properties = {}))),
        (type = "CEO"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Spacex"), (type = "Company"), (properties = {}))),
        (type = "CHIEF_ENGINEER"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Spacex"), (type = "Company"), (properties = {}))),
        (target = Node(
          (id = "Reusable Rockets"),
          (type = "Technology"),
          (properties = {})
        )),
        (type = "LED_INNOVATIONS_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Spacex"), (type = "Company"), (properties = {}))),
        (target = Node(
          (id = "Commercial Spaceflight"),
          (type = "Field"),
          (properties = {})
        )),
        (type = "LED_INNOVATIONS_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Tesla"), (type = "Company"), (properties = {}))),
        (type = "EARLY_INVESTOR"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Tesla"), (type = "Company"), (properties = {}))),
        (type = "CEO"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Tesla"), (type = "Company"), (properties = {}))),
        (type = "PRODUCT_ARCHITECT"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Tesla"), (type = "Company"), (properties = {}))),
        (target = Node(
          (id = "Electric Vehicles"),
          (type = "Product category"),
          (properties = {})
        )),
        (type = "LEADER_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Openai"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "CO_FOUNDED"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Openai"),
          (type = "Organization"),
          (properties = {})
        )),
        (target = Node(
          (id = "Artificial Intelligence (Ai) Research"),
          (type = "Field"),
          (properties = {})
        )),
        (type = "ADVANCES"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Openai"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "LEFT"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "In 2002, Musk founded the space technology company SpaceX, becoming its CEO and chief engineer; the company has since led innovations in reusable rockets and commercial spaceflight. Musk joined the automaker Tesla as an early investor in 2004 and became its CEO and product architect in 2008; it has since become a leader in electric vehicles. In 2015, he co-founded OpenAI to advance artificial intelligence (AI) research but later left; growing discontent with the organization's direction and")
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Xai"), (type = "Company"), (properties = {})),
      Node((id = "Twitter"), (type = "Social network"), (properties = {})),
      Node((id = "X"), (type = "Social network"), (properties = {})),
      Node((id = "Neuralink"), (type = "Company"), (properties = {})),
      Node((id = "The Boring Company"), (type = "Company"), (properties = {})),
      Node((id = "Ai Research"), (type = "Field"), (properties = {})),
      Node((id = "Ai Boom"), (type = "Event"), (properties = {})),
      Node((id = "2016"), (type = "Year"), (properties = {})),
      Node((id = "2017"), (type = "Year"), (properties = {})),
      Node((id = "2022"), (type = "Year"), (properties = {})),
      Node((id = "2023"), (type = "Year"), (properties = {})),
      Node((id = "2020S"), (type = "Decade"), (properties = {})),
    ]),
    (relationships = [
      Relationship(
        (source = Node((id = "Ai Boom"), (type = "Event"), (properties = {}))),
        (target = Node((id = "2020S"), (type = "Decade"), (properties = {}))),
        (type = "OCCURRED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Twitter"),
          (type = "Social network"),
          (properties = {})
        )),
        (target = Node((id = "2022"), (type = "Year"), (properties = {}))),
        (type = "ACQUIRED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Twitter"),
          (type = "Social network"),
          (properties = {})
        )),
        (target = Node(
          (id = "X"),
          (type = "Social network"),
          (properties = {})
        )),
        (type = "REBRANDED_AS"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Twitter"),
          (type = "Social network"),
          (properties = {})
        )),
        (target = Node((id = "2023"), (type = "Year"), (properties = {}))),
        (type = "REBRANDED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Neuralink"),
          (type = "Company"),
          (properties = {})
        )),
        (target = Node((id = "2016"), (type = "Year"), (properties = {}))),
        (type = "CO_FOUNDED_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "The Boring Company"),
          (type = "Company"),
          (properties = {})
        )),
        (target = Node((id = "2017"), (type = "Year"), (properties = {}))),
        (type = "FOUNDED_IN"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "intelligence (AI) research but later left; growing discontent with the organization's direction and their leadership in the AI boom in the 2020s led him to establish xAI. In 2022, he acquired the social network Twitter, implementing significant changes and rebranding it as X in 2023. His other businesses include the neurotechnology company Neuralink, which he co-founded in 2016, and the tunneling company the Boring Company, which he founded in 2017.")
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Musk"), (type = "Person"), (properties = {})),
      Node(
        (id = "2024 U.S. Presidential Election"),
        (type = "Event"),
        (properties = {})
      ),
      Node(
        (id = "Far-Right"),
        (type = "Political ideology"),
        (properties = {})
      ),
      Node((id = "Donald Trump"), (type = "Person"), (properties = {})),
      Node((id = "United States"), (type = "Country"), (properties = {})),
      Node((id = "Doge"), (type = "Organization"), (properties = {})),
      Node(
        (id = "Trump Administration"),
        (type = "Government"),
        (properties = {})
      ),
      Node(
        (id = "America Party"),
        (type = "Political party"),
        (properties = {})
      ),
    ]),
    (relationships = [
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "2024 U.S. Presidential Election"),
          (type = "Event"),
          (properties = {})
        )),
        (type = "DONOR_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Far-Right"),
          (type = "Political ideology"),
          (properties = {})
        )),
        (type = "SUPPORTER_OF"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Donald Trump"),
          (type = "Person"),
          (properties = {})
        )),
        (type = "SENIOR_ADVISOR_TO"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Donald Trump"),
          (type = "Person"),
          (properties = {})
        )),
        (target = Node(
          (id = "United States"),
          (type = "Country"),
          (properties = {})
        )),
        (type = "PRESIDENT_OF"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Doge"),
          (type = "Organization"),
          (properties = {})
        )),
        (type = "HEAD_OF"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Trump Administration"),
          (type = "Government"),
          (properties = {})
        )),
        (type = "LEFT"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "America Party"),
          (type = "Political party"),
          (properties = {})
        )),
        (type = "CREATED"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "Musk was the largest donor in the 2024 U.S. presidential election, and is a supporter of global far-right figures, causes, and political parties. In early 2025, he served as senior advisor to United States president Donald Trump and as the de facto head of DOGE. After a public feud with Trump, Musk left the Trump administration and announced he was creating his own political party, the America Party.")
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Musk"), (type = "Person"), (properties = {})),
      Node((id = "Covid-19 Pandemic"), (type = "Event"), (properties = {})),
      Node((id = "Twitter"), (type = "Service"), (properties = {})),
      Node((id = "Hate Speech"), (type = "Concept"), (properties = {})),
      Node((id = "Misinformation"), (type = "Concept"), (properties = {})),
      Node((id = "Conspiracy Theories"), (type = "Concept"), (properties = {})),
      Node(
        (id = "Antisemitic Comments"),
        (type = "Concept"),
        (properties = {})
      ),
      Node((id = "Racist Comments"), (type = "Concept"), (properties = {})),
      Node(
        (id = "Transphobic Comments"),
        (type = "Concept"),
        (properties = {})
      ),
      Node(
        (id = "Political Activities"),
        (type = "Concept"),
        (properties = {})
      ),
      Node((id = "Views"), (type = "Concept"), (properties = {})),
      Node((id = "Statements"), (type = "Concept"), (properties = {})),
      Node((id = "Polarizing Figure"), (type = "Concept"), (properties = {})),
    ]),
    (relationships = [
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Political Activities"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "ENGAGES_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node((id = "Views"), (type = "Concept"), (properties = {}))),
        (type = "HOLDS"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Statements"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "MAKES"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Polarizing Figure"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "BECAME"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Misinformation"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "CRITICIZED_FOR"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Conspiracy Theories"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "PROMOTES"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Antisemitic Comments"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "AFFIRMS"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Racist Comments"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "AFFIRMS"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Transphobic Comments"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "AFFIRMS"),
        (properties = {})
      ),
      Relationship(
        (source = Node((id = "Musk"), (type = "Person"), (properties = {}))),
        (target = Node(
          (id = "Twitter"),
          (type = "Service"),
          (properties = {})
        )),
        (type = "ACQUIRED"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Twitter"),
          (type = "Service"),
          (properties = {})
        )),
        (target = Node(
          (id = "Hate Speech"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "EXPERIENCED_INCREASE_IN"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Twitter"),
          (type = "Service"),
          (properties = {})
        )),
        (target = Node(
          (id = "Misinformation"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "EXPERIENCED_SPREAD_OF"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "Musk's political activities, views, and statements have made him a polarizing figure, especially following the COVID-19 pandemic. He has been criticized for making unscientific and misleading statements, including COVID-19 misinformation and promoting conspiracy theories, and affirming antisemitic, racist, and transphobic comments. His acquisition of Twitter was controversial due to a subsequent increase in hate speech and the spread of misinformation on the service. His role in the second")
    ))
  ),
  GraphDocument(
    (nodes = [
      Node((id = "Hate Speech"), (type = "Concept"), (properties = {})),
      Node((id = "Misinformation"), (type = "Concept"), (properties = {})),
      Node((id = "Service"), (type = "Concept"), (properties = {})),
      Node(
        (id = "Second Trump Administration"),
        (type = "Organization"),
        (properties = {})
      ),
      Node((id = "Public Backlash"), (type = "Concept"), (properties = {})),
      Node((id = "Doge"), (type = "Concept"), (properties = {})),
    ]),
    (relationships = [
      Relationship(
        (source = Node(
          (id = "Hate Speech"),
          (type = "Concept"),
          (properties = {})
        )),
        (target = Node(
          (id = "Service"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "ON"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Misinformation"),
          (type = "Concept"),
          (properties = {})
        )),
        (target = Node(
          (id = "Service"),
          (type = "Concept"),
          (properties = {})
        )),
        (type = "ON"),
        (properties = {})
      ),
      Relationship(
        (source = Node(
          (id = "Public Backlash"),
          (type = "Concept"),
          (properties = {})
        )),
        (target = Node((id = "Doge"), (type = "Concept"), (properties = {}))),
        (type = "IN_RESPONSE_TO"),
        (properties = {})
      ),
    ]),
    (source = Document(
      (metadata = {}),
      (page_content =
        "increase in hate speech and the spread of misinformation on the service. His role in the second Trump administration attracted public backlash, particularly in response to DOGE.")
    ))
  ),
];
