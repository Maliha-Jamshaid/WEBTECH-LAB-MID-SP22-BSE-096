const faqContainer = document.querySelector('.faq-container');
const questionInput = document.querySelector('.Qtxt');
const answerInput = document.querySelector('.Atxt');

function addToggleFunctionality(card) 
{
  card.addEventListener('click', (e) => 
  {
    if (e.target.classList.contains('fa-chevron-down')) 
    {
      card.classList.toggle('active');
    }
    else if (e.target.classList.contains('fa-times')) 
    {
      faqContainer.removeChild(card);
    }
  });
}

function createNewFAQCard(question, answer) 
{
  const newFAQCard = document.createElement('div');
  newFAQCard.classList.add('faq');

  const newFAQTitle = document.createElement('h3');
  newFAQTitle.classList.add('faq-title');
  newFAQTitle.textContent = question;

  const newFAQText = document.createElement('p');
  newFAQText.classList.add('faq-text');
  newFAQText.textContent = answer;

  const newFAQToggle = document.createElement('button');
  newFAQToggle.classList.add('faq-toggle');
  newFAQToggle.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';

  newFAQCard.appendChild(newFAQTitle);
  newFAQCard.appendChild(newFAQText);
  newFAQCard.appendChild(newFAQToggle);

  faqContainer.appendChild(newFAQCard);

  addToggleFunctionality(newFAQCard);
}

document.querySelectorAll('.faq').forEach((faqCard) =>
 {
  addToggleFunctionality(faqCard);
});

document.querySelector('.enter').addEventListener('click', () =>
 {
  const question = questionInput.value;
  const answer = answerInput.value;

  if (question && answer)
   {
    createNewFAQCard(question, answer);

    questionInput.value = '';
    answerInput.value = '';
  }
});