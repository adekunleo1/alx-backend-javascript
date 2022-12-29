export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
  }

  queue.push('Guardrail was processed');
  return queue;
}
