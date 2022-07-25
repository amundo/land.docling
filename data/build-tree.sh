for i in esperanto hiligaynon miscellaneous sumerian ; do 
	mkdir -p languages/${i}; 
	mkdir languages/${i}/corpus/;
	touch languages/${i}/corpus/${i}-corpus.json;
	mkdir languages/${i}/language/;
	touch languages/${i}/language/${i}-language.json;
	mkdir languages/${i}/lexicon/;
	touch languages/${i}/lexicon/${i}-lexicon.json;
	mkdir languages/${i}/grammar/;
	touch languages/${i}/grammar/${i}-grammar.json;
done
