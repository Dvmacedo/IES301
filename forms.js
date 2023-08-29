document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");
    const tipoAluno = document.getElementById("alunoRadio");
    const tipoProfessor = document.getElementById("professorRadio");
    const extraFields = document.getElementById("extraFields");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const telefoneFixo = document.getElementById("telefoneFixo").value;
        const celular = document.getElementById("celular").value;
        const tipo = tipoAluno.checked ? "aluno" : "professor";

        let pessoa;

        if (tipo === "aluno") {
            const matricula = document.getElementById("matricula").value;
            const curso = document.getElementById("curso").value;
            pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, celular, matricula, curso);
        } else {
            const matricula = document.getElementById("matricula").value;
            const areaAtuacao = document.getElementById("areaAtuacao").value;
            const lattes = document.getElementById("lattes").value;
            pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, celular, matricula, areaAtuacao, lattes);
        }

        const dadosExibicao = `
            Tipo: ${tipo}
            Nome: ${pessoa.nome}
            Email: ${pessoa.email}
            Data de Nascimento: ${pessoa.dataNascimento}
            Telefone Fixo: ${pessoa.telefoneFixo}
            Celular: ${pessoa.celular}
            ${tipo === "aluno" ? `Matrícula: ${pessoa.matricula}\nCurso: ${pessoa.curso}` : `Área de Atuação: ${pessoa.areaAtuacao}\nLink do Lattes: ${pessoa.lattes}`}
        `;

        alert(dadosExibicao);

        form.reset();
        extraFields.innerHTML = '';
    });

    tipoAluno.addEventListener("click", function() {
        extraFields.innerHTML = `
            <div class="mb-3">
                <label for="matricula" class="form-label">Matrícula</label>
                <input type="text" class="form-control" id="matricula" required>
            </div>
            <div class="mb-3">
                <label for="curso" class="form-label">Curso</label>
                <input type="text" class="form-control" id="curso" required>
            </div>
        `;
    });

    tipoProfessor.addEventListener("click", function() {
        extraFields.innerHTML = `
            <div class="mb-3">
                <label for="matricula" class="form-label">Matrícula</label>
                <input type="text" class="form-control" id="matricula" required>
            </div>
            <div class="mb-3">
                <label for="areaAtuacao" class="form-label">Área de Atuação</label>
                <input type="text" class="form-control" id="areaAtuacao" required>
            </div>
            <div class="mb-3">
                <label for="lattes" class="form-label">Link do Lattes</label>
                <input type="url" class="form-control" id="lattes" required>
            </div>
        `;
    });
});

class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matricula, curso) {
        super(nome, email, dataNascimento, telefoneFixo, celular);
        this.matricula = matricula;
        this.curso = curso;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matricula, areaAtuacao, lattes) {
        super(nome, email, dataNascimento, telefoneFixo, celular);
        this.matricula = matricula;
        this.areaAtuacao = areaAtuacao;
        this.lattes = lattes;
    }
}
